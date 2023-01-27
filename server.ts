

import 'zone.js/node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { environment } from 'src/environments/environment';


(global as any).WebSocket = require('ws');
(global as any).XMLHttpRequest = require('xhr2');

const domino = require('domino');
const fs = require('fs');
const templateA = fs.readFileSync(join(__dirname, '.', '../browser', 'index.html')).toString();
const win = domino.createWindow(templateA);
win.Object = Object;
win.Math = Math;

global['window'] = win;
global['document'] = win.document;
global['navigator'] = win.navigator;
const globalAny:any = global;
globalAny['branch'] = null;
globalAny['object'] = win.object;
global = globalAny;
// firebaseui fix: componentHandler is expected in the global scope
// global['componentHandler'] = {register: () => {}};


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  // process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

  const server = express();
  const websiteFileLocation = environment.production ? "browser":'dist/functions/browser';
  const distFolder = join(process.cwd(), websiteFileLocation);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);
  // server.set('Server-Timing', `Prerender;dur=${1000};desc="Headless render time (ms)"`);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '24h'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {

    const timeoutAfter = 9000; // timeout after 1s
    const indexFile = join(distFolder, 'index.html');

    let isActive:any = setTimeout(() => {
      console.error(`TIMEOUT after ${timeoutAfter}ms on `, req.url);
      isActive = null;
      const html = readFileSync(indexFile).toString() + '<!--data-cy=error-timeout xxx-->';
      res.status(200).send(html);
    }, timeoutAfter)

    res.render( indexHtml, { req, res, }, (err: Error, html: string) => {
        if(err) console.error(err);
        if(isActive) {
          clearTimeout(isActive); // clear timeout if response comes first
        } else {
          return; // if timeout, response is already sent
        }

        if(!html) {
          // if there is error, just render index.html, it's better then 500 error
          html = readFileSync(indexFile).toString() + '<!-- data-cy=error iii-->';
        }
        res.status(200).send(html);
      },
    );
    // The old code 
    // res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
