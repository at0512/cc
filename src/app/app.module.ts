import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerdelivComponent } from './customerdeliv/customerdeliv.component';
import { InquirydetailsComponent } from './inquirydetails/inquirydetails.component';
import { InvoiceDetailsComponent } from './invoice-details/invoice-details.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CreditmemoComponent } from './creditmemo/creditmemo.component';
import { PayagesComponent } from './payages/payages.component';
import { SalesorderComponent } from './salesorder/salesorder.component';  
import { HttpClientModule } from '@angular/common/http'; 
import { FormBuilder} from '@angular/forms';
import { OverallsalesComponent } from './overallsales/overallsales.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomerdelivComponent,
    InquirydetailsComponent,
    InvoiceDetailsComponent,
    CreditmemoComponent,
    PayagesComponent,
    SalesorderComponent,
    OverallsalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
