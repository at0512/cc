import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { FormBuilder} from '@angular/forms'; 
import { FormGroup, FormControl,  Validators } from '@angular/forms'; 
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any;
  
  constructor(private  router: Router , private http: HttpClient,  private fb : FormBuilder, private ser:DataServiceService) { 

  }

  ngOnInit(): void {
  }
    Onsubmit(name:any,password:any){ 
      this.login = { 
        password, 
        name
      } 
      this.ser.append(name)
      const headers = new HttpHeaders()

  .set('Authorization', 'my-auth-token')

  .set('Content-Type', 'application/json');

  this.http.post("http://localhost:3030/", JSON.stringify(this.login), { headers: headers }).subscribe((data:any) => {

    console.log("sended data");
    console.log(this.login); 
     console.log(data.status1);
 
 if(data.status1 == "Login Sucess"){ 

  this.router.navigate(['profile']);
 }
  
     

    else {
         
      alert('ENTER PROPER ID  AND PASSWORD');

    }

  });
    }  
  }

