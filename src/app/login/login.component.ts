import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

username:string='';
password:string='';
validate()
{
  if(this.username===null || this.password===null)
  {
    alert ("Fields must not be empty");
  }
  if(this.password != "[A-Za-z0-9]" || this.username != "[A-Za-z0-9]")
  {
    alert ("Fields should only contain letters and numbers");
  }
}

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(myForm:NgForm) :void
  {
    if(myForm.valid)
      {
        this.validate();
      } 
  }
 
}
