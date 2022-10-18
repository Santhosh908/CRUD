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
          let k=Object.values(response)[0][0];
          this.posts = k;
        });
  }
  save(name:any,email:any,number:any,date:any,location:any,gender:any,address:any){
    let data1=date.slice(0,10);
    this.http.post("http://localhost:3000/adddetails",[name,email,number,data1,location,gender,address]).subscribe(data=>{
    })
    this.dialog.closeAll();
    window.alert("Sucessfully added");
    window.location.reload();
  }
  nextuser(){
    this.service.getPosts()
        .subscribe(response => {
          let k=Object.values(response)[0][0];
          this.posts = k;
        });
  }

}
