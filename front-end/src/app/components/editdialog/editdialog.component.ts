import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.css']
})
export class EditdialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data1:any,private http:HttpClient,private dialog:MatDialog) { }
  name1:any;
  email1:any;
  num1:any;
  date12:any
  location1:any;
  add1:any;
  gen1:any;
  id:any=this.data1.id;
  submit(name:any,email:any,number:any,date:any,location:any,gender:any,address:any){
    if(name.value.length!=0)
    this.name1=name.value
    if(email.value.length!=0)
    this.email1=email.value
    if(number.value.length!=0)
    this.num1=number.value
    if(date.value.length!=0)
    this.date12=date.value
    if(location.value.length!=0)
    this.location1=location.value
    if(gender.value.length!=0)
    this.gen1=gender.value
    if(address.value.length!=0)
    this.add1=address.value
    this.http.post("http://localhost:3000/updatedetails",[this.name1,this.email1,this.num1,this.date12,this.location1,this.gen1,this.add1,this.id]).subscribe(data=>{
    })
    this.dialog.closeAll();
    window.location.reload();
  }
  ngOnInit(): void {
    console.log("Here");
    console.log(this.data1.id);
    this.http.post("http://localhost:3000/searchdetails",[this.data1.id]).subscribe(data=>{
      console.log(data);
      var k=Object.values(data);
      this.name1=k[0].name;
      this.email1=k[0].email;
      this.num1=k[0].num;
      this.date12=k[0].date1;
      this.location1=k[0].location;
      this.add1=k[0].address;
      this.gen1=k[0].gender;
      console.log(this.gen1);
    })
  }

}
