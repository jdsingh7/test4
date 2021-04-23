import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

username:string='Bob';
password:string="mypassword";
validate()
{
  if(this.username===null || this.password===null)
  {
    alert ("Fields must not be empty");
  }
  else if(this.password != "[A-Za-z0-9]" || this.username != "[A-Za-z0-9]")
  {
    alert ("Fields should only contain letters and numbers");
  }
  else 
  {
     null;
  }
}

  constructor() {
    
   }

  ngOnInit(): void {
  }
  OnSubmit(firstForm:NgForm)
  {
      this.validate.arguments(firstForm);    
  }
}
