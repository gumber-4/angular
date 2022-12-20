import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private serviceInstance: ServiceService, private router:Router) {}
  
  ngOnInit(): void {}

  register(formVal: NgForm) {
     let FormData = { name: formVal.value.name, fname: formVal.value.fathername, age: formVal.value.age,  }; //In formVal.value.(field) this field comes from name in html ex: name="event", name="rno"
     this.serviceInstance.pushData(FormData);
     console.warn(FormData)
    
      // some stuff
      this.router.navigate(['/userdetails']);
    

  }
}
