import { Component, OnInit } from '@angular/core';
import { TransferidService } from '../api/transferid.service';
import data from 'db.json';

interface Post {
  id: number;
  name: any;
  surname: any;
  birthday: any;
  address: any;
}

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  id= this.transferid.id;
  myPost: any;

  constructor(private transferid: TransferidService) { }

  ngOnInit(): void {
    this.myPost = this.displayPost(this.id)
  }
  posts : Post[] = data.posts;

  displayPost(id){
    return this.posts.find(c => c.id === id);
  }


}
