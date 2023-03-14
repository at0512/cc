import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-creditmemo',
  templateUrl: './creditmemo.component.html',
  styleUrls: ['./creditmemo.component.css']
})
export class CreditmemoComponent implements OnInit {

  searchText:any;
  dataloaded = false;
  container = true;
  users: any = {
    username: 12
  };
  prof: any;
  url = "http://localhost:3030/creditmemo";
  memo: any;
  i:any;
  element:any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {

    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(this.url, JSON.stringify(this.users), { headers: headers }).subscribe((data: any) => {
      console.log(data.a1);
      this.i = data.a1; 
      this.i[1].AUGBL._text = 'ABAPER'; 
      this.i[1].AUGDT._text = '2023-01-02' 
      this.i[0].AUGDT._text = '00000012'
      console.log(this.i);
      this.element = this.i 
      //console.log(this.i)
      // setTimeout(() => {
      this.container = true;
      // }, 3000);
    });
  }
  }