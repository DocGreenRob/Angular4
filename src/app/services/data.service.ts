import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
//import { map } from 'rxjs/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { 
    console.log('Data service connected');
  }

  public url:string;
  public options:any;

  getData(){
    //this.http.get(this.url).map(res => res.json());
  }
}
