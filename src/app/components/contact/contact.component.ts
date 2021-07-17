import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  log(x){
    console.log(x);
  }

  userModel= new User("", 9133106595, "pedapadu", "vizag");

}
