import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

var serviceAccount = {
  "type": "service_account",
  "project_id": "test-dipesh",
  "private_key_id": "5917a3e34b34e30cba667d594655e2926e7503c8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDC8U74KHoiJF49\n7S9CqDJy175QaM0U/0Q3HTZBC8fI0AFjmjWC0TKR7JpbVlyZ2/xljvgIHPVZIy0X\nLeh6Ehy4CP1iTRw4LCvoYkLlXcPKx9kuAC4D4r1AU53EP0kgDczHay+Lyrmq4w0y\nAqLXrEdIZUC4VnTHclZz+bnaVmjQU8ewyDnv7ynW9qfUMgTvWDeF+NIp2MVUAgYc\nFAjwUUe7Du84oEyxucuDC8PtE2U5kMLPqbhZ+Gn8UUBaU/61V6NXL6mFrv5P+BnV\nwsRZNQm5UMP/ZVhUEiv/n5Z9SOZ2w+90hW5l5P+397XnZTgnE3AT7hsN6TkXsQLX\nQaNHpGyvAgMBAAECggEATBX493x85tSA//SSDJcvUYmJG0M8QCS9kDFTmqGpcWRW\nFnT6y7sw3KmXOW0EqXymD1F0113OGONU1wYxBWwKT34av4JPMFF1NbccWv90yrGj\nv4OMcjHOIcxA+Ham6N7Z/T+FiC8wtlT2Mn265yizjbsPPqNn4uxqd8uRUXmGYUCT\nAU1IDvrFi3h+J8iJKj5Crdumx79F29uJKXuJntgnxHZgZXs7SwmlmKZnUoLkygPK\nP9Mv0fMj+lt20TQDv+ENE1K7wUosRZr4+VvMx/fNlXPMqI5Mjrd+1R58wL3btakk\nL0q+kydoaHtSeJBDQLNxSEX1BpwXefoX3pYY+K6JWQKBgQDwyFJ8b+Q9u9up/mVz\nBdThnKVS2q2MOy2BzUhD0UJKhITNtvixWTNEef+7FK45EBpq/KVLR+DFUqdFiemE\nuYVoIabCMF2AODj3JY7gWLUAEWOif9qP9QJg4Eu5m6v43BhHB8FwN8RzN7zmOSNd\nlvriWCdr7HM1pleLHPGQs9pEYwKBgQDPQ1TjwknooW9sru4odTafmccQ0xtGHcpO\n6e+traNDvqZYbtU/G4GMC+Y726VNVxBbVL1Fb9HToFT34AKpbHSijNabSmj8d/ke\nBWo0K4eUESOGPL9svGrxVmtp1arGZZam+CaQqU7w9uPHw+18hB5/qjB1N7Aj6KGy\nzzhjNzVqRQKBgQDJx4Zgo8AJAAoonnlT+Boba5OcKIfxkZIkSez6cD32hrFoV6J3\ntQHiq75kgAM07MrGx6yZtsWldwuYmedpA7PJvRGrgK6KihMrAn2GgrBEO05c2npF\n05RHrQ+ons1yQrfRpq0zpnhp+dbCtDVv89uRnUCED+XImvqYKQxDMIWEcwKBgDJl\n7P51AAPRPYbwAnlUBzRH8F/m9XrXQ5psyBszXb/bXBek27W8uoOTYSitAEUOJqwO\nrvdzeVI8amzby8nm1XWxSX35Wg4KHkluh6Sn8Q/QGxNJMkL+jgKhQP07N4uGqFtx\ne+8xPEDbyAeLXPQqLEBe4eme4PXaW3dfbBa0FgkBAoGAP2ik6wEloK0vZUAT4paC\nsU0+dG11B8Fd2YfMk5mjAxDwSZUKJP50SKhO2U2q4ZwwDdc1F+R2/FhwiX29lCIO\nNB+tcajp9scLWoZuqxU9ezLS8ZNg796PCbaqjBCzbO+P5Zg0ubPFJzuTxSEeaTb1\neWSsGZn/jfQXBnu2Z+JS7Rc=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-2xcig@test-dipesh.iam.gserviceaccount.com",
  "client_id": "104767402870727920863",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2xcig%40test-dipesh.iam.gserviceaccount.com"
};

  import * as admin from 'firebase-admin';
  import { FIREBASE_ADMIN } from './app.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers:[
  { provide: FIREBASE_ADMIN, useFactory: () => admin.apps[0] || admin.initializeApp({
    credential: admin.credential.cert(Object(serviceAccount)), 
  }) }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
