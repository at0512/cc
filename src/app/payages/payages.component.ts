import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-payages',
  templateUrl: './payages.component.html',
  styleUrls: ['./payages.component.css']
})
export class PayagesComponent implements OnInit {
  searchText:any;
  dataloaded = false;
  container = true;
  users: any = {
    "uname": ""
  };
  prof: any;
  url = "http://localhost:3030/payages";
  payage: any;

i:any;
element:any;
  constructor(private http: HttpClient, private router: Router,private ser:DataServiceService) { }

  ngOnInit(): void {
  this.users = { 
    uname: this.ser.usernametest
  }
    
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(this.url, JSON.stringify(this.users), { headers: headers }).subscribe((data: any) => {
      console.log(data.a1);
      this.i = data.a1;
      console.log(this.i);
      // setTimeout(() => {
      this.container = true;
      // }, 3000);
    });
  }
}
