import { Injectable } from '@angular/core';
import { person } from './person';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  p: person[]=[];

  constructor() { }


getPersonDetails(){
  return this.p;
}

pushData(p1:any){
  this.p.push(p1);
}
}