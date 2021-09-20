import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactData: any;
  hour: any;
  minutes: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getContactDetails();
    this.hour = new Date().getHours();
    this.minutes = new Date().getMinutes();
  }

  getContactDetails(){
    this.api.getContact()
    .subscribe(res=>{
      this.contactData = res;
    })
  }

}
