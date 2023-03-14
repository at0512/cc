import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-customerdeliv',
  templateUrl: './customerdeliv.component.html',
  styleUrls: ['./customerdeliv.component.css']
})
export class CustomerdelivComponent implements OnInit {

  dataloaded = false;
  container = true;
  deliv: any;
  i:any;
  element:any;
  searchText:any;
  url = "http://localhost:3030/custmdeliv";

  constructor(private http: HttpClient, private router: Router, private ser:DataServiceService) { } 
  users: any = this.ser.usernametest
  ngOnInit(): void {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(this.url, JSON.stringify(this.users), { headers: headers }).subscribe((data: any) => {
      console.log(data.a1);
      this.i = data.a1; 
      console.log(this.i[1].ABSSC._text)
      //console.log(this.i);
      // setTimeout(() => {
      this.container = true;
      // }, 3000);
    });
  }

}
