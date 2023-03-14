import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  usernametest:any;
  constructor() { } 
  append(uname:any){
    this.usernametest=uname;

}
}
