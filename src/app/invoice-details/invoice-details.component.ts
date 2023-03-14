import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  dataloaded = false;
  container = true;
  
  prof: any;
  url = "http://localhost:3030/invoicedetails"; 
  users:any ;
  i: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    this.users = { 
      uname:12 
    }
    console.log(this.users);

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(this.url, JSON.stringify(this.users), { headers: headers }).subscribe((data: any) => {
      console.log(data.a1);
      this.i = data.a1;
      // setTimeout(() => {
      this.container = true;
      // }, 3000);
    });
  }

}