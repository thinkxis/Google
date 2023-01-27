import { InjectionToken, NgModule, NgZone, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { initializeApp } from "firebase/app";

import { C0Component } from './c0/c0.component';
import { CComponent } from './c/c.component';

  import { app } from 'firebase-admin';
// try{
// }catch(err){
//   console.log(err)
// }
  export const FIREBASE_ADMIN = new InjectionToken<app.App>('firebase-admin');
  function islesys(){ return initializeApp(environment.firebase, 'islesys'); }


@NgModule({
  declarations: [
    AppComponent,
    C0Component,
    CComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
  ],
  providers: [
    {
      provide: 'islesys',
      deps: [PLATFORM_ID, NgZone],
      useFactory: islesys
    },
    { provide: FIREBASE_ADMIN, useValue: null }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
