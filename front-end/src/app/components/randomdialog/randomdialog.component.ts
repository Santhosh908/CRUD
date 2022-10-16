import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-randomdialog',
  templateUrl: './randomdialog.component.html',
  styleUrls: ['./randomdialog.component.css']
})
export class RandomdialogComponent implements OnInit {
  posts:any;

  constructor(private service:PostService,private http:HttpClient,private dialog:MatDialog) {
   }

  ngOnInit(): void {
    this.service.getPosts()
        .subscribe(response => {
          var k=Object.values(response)[0][0];
          this.posts = k;
        });
  }
  save(name:any,email:any,number:any,date:any,location:any,gender:any,address:any){
    this.http.post("http://localhost:3000/adddetails",[name,email,number,date,location,gender,address]).subscribe(data=>{
    })
    this.dialog.closeAll();
    window.alert("Sucessfully added");
    window.location.reload();
  }
  nextuser(){
    this.service.getPosts()
        .subscribe(response => {
          var k=Object.values(response)[0][0];
          this.posts = k;
          console.log(k);
        });
  }

}
