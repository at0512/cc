import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-inquirydetails',
  templateUrl: './inquirydetails.component.html',
  styleUrls: ['./inquirydetails.component.css']
})
export class InquirydetailsComponent implements OnInit {
    searchText:any;
    dataloaded = false;
    container = true;
    users: any = {
      "uname": "",
      "pass": ""
    };
    inq: any;
    i:any;
    element:any;
    url = "http://localhost:3030/inquiry";
  
    constructor(private http: HttpClient, private router: Router) { }
   
    ngOnInit(): void {

  
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.http.post(this.url, JSON.stringify(this.users), { headers: headers }).subscribe((data: any) => {
        console.log(data.a1);
        this.i = data.a1;
        console.log(this.i);
        this.element = this.i 
        console.log(this.i[0].CREATED_BY._text)
        // setTimeout(() => {
        this.container = true;
        // }, 3000);
      });
    }
    }
