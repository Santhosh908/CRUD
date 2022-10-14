import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-randomdialog',
  templateUrl: './randomdialog.component.html',
  styleUrls: ['./randomdialog.component.css']
})
export class RandomdialogComponent implements OnInit {
  posts:any;

  constructor(private service:PostService) {
   }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe(response => {
          var k=Object.values(response)[0][0];
          this.posts = k;
        });
  }
  
  nextuser(){
    this.service.getPosts()
        .subscribe(response => {
          var k=Object.values(response)[0][0];
          this.posts = k;
        });
  }

}
