import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { DataServiceService } from '../data-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-overallsales',
  templateUrl: './overallsales.component.html',
  styleUrls: ['./overallsales.component.css']
})
export class OverallsalesComponent implements OnInit {

  dataloaded = false;
  container = true;
  i:any;
  
  login: any;
  url = "http://localhost:3030/overallsales";
  
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
       this.i= data.a1 
       this.i.CREATION_TIME._text = '12:03:12'
      
    });
    
  }
  

}
