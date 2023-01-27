import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import type { app } from 'firebase-admin';
import { FIREBASE_ADMIN } from '../app.module';
import { doc, getDoc, getFirestore  } from "firebase/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isBrowser;
  isServer;
  db:any;
  dbISLESYS:any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(FIREBASE_ADMIN) private admin: app.App,
    @Inject('islesys') private fsMaps:any,
  ) { 
    this.isServer = isPlatformServer(this.platformId);
    if(this.isServer){
      this.db = this.admin.firestore();
    }

    this.isBrowser = isPlatformBrowser(this.platformId);
    if(this.isBrowser){
      this.dbISLESYS = getFirestore(this.fsMaps)
    }
  }


  async getDataServer(id:string){
    this.admin?.firestore;
    const doc = this.db.collection("maps").doc(id);
    return doc.get();
  }

  getData(id:string){
    let docX = doc(this.dbISLESYS, "maps", id)
    return getDoc(docX)
  }

}
