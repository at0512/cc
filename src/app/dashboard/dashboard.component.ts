import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { DataServiceService } from '../data-service.service'; 
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataloaded = false;
  container = true;
  code:any;
  
  login: any;
  url = "http://localhost:3030/profile";
  
  constructor(private http: HttpClient, private router: Router, public _data:DataServiceService) { 
    this.login = {

      UNAME:this._data.usernametest

    };

  }

  ngOnInit(): void {

    

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(this.url, JSON.stringify(this.login), { headers: headers }).subscribe((data: any) => {
      console.log(data.a1);
      
      // setTimeout(() => {
      this.container = true;  
      // }, 3000);
       this.code= data.a1
       console.log(this.code.item.KUNNR._text)
       

    });
    
  }
  

}