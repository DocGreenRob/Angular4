import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  address:IAddress;
  hobbies:string[];
  phoneNumbers:number[];
  girlFriends:any[];
  girl:IGirl;

  constructor(private dataService:DataService) { 
    console.log('constructor()...');
  }

  ngOnInit() {
    console.log('ngOnInit()...');

    this.name = 'Robert Green';
    this.age = 38;
    this.address = {
      street: '123 Main Street',
      city: 'Olympia',
      state: 'WA'
    };
    this.hobbies = ['Football', 'Basketball'];
    this.girl = {
      name: 'Seven',
      phone: 123,
      street: '123',
      city: 'asdf',
      state: 'WA'
    }
  }

  onClick(){
    console.log('onClick()');
    this.name = 'I was clicked!!!'; 
    this.hobbies.push('Baseball');
  }

  addHobby(hobby){
    this.hobbies.unshift(hobby);
    return false;   
  }

  delete(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
      }
    }
  }
} 

interface IAddress{
    street:string;
    city:string;
    state:string;
}

interface IGirl extends IAddress{
  name:string;
  phone:number;
}
