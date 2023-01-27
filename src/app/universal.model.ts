
export interface mapModel {
  id:string;
  type:number|undefined; 
  about:string; info:string;
  
  by:string; contact:string; dial_code:string;
  name: string; data:any;
  active:boolean; prime:boolean,
  sin:any;
};

export interface DatasetModel {
  id:string;
  type:number|undefined; 
  about:string; info:string; 

  by:string; contact:string; dial_code:string;
  name: string; data:any;
  active:boolean;
  sin:any;
};


export interface UserModel {
  uid: string; 
  name: string; display:string;  
  phone: string; iso: string; coin:string; 
  email: string;  emailV:boolean; emails: string[];
  key:string;

  time_sin:any; time_upd:any; time_log:any; 
  state: boolean;
}
