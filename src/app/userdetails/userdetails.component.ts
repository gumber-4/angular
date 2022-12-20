import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 p1: any;
  constructor(private servDet: ServiceService) { }

  ngOnInit(): void {
    this.p1=this.servDet.getPersonDetails()
    }

}
