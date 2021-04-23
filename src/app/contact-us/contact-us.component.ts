import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

name:string='';
email:string='';
message:string='';
validate()
{
  if(this.name===null || this.email===null || this.message===null)
  {
    alert ("Fields must not be empty");
  }
}
  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(myForm:NgForm)
  {
      if(myForm.valid)
      {
        this.validate();
      }    
  }
}
