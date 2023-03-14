import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-salesorder',
  templateUrl: './salesorder.component.html',
  styleUrls: ['./salesorder.component.css']
})
export class SalesorderComponent implements OnInit {
  login: any; 
  i:any;
  
  constructor(private  router: Router , private http: HttpClient, private ser:DataServiceService) { 

  }

  ngOnInit(): void {
  }
    Onsubmit(name:any){ 
      this.login = { 
       customer_id: Number= name 
      }
      const headers = new HttpHeaders()

  .set('Authorization', 'my-auth-token')

  .set('Content-Type', 'application/json');

  this.http.post("http://localhost:3030/ff", JSON.stringify(this.login), { headers: headers }).subscribe((data:any) => {

    console.log("sended data");
    console.log(this.login); 
     console.log(data.a1)  
     this.i = data.a1 
     console.log(this.i.ITEM_NUMBER._text)

  
  });
    }  
  }

