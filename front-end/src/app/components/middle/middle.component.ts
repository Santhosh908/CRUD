import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddialogueComponent } from '../adddialogue/adddialogue.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor(private dialog:MatDialog,private http:HttpClient) { }
  opendia(){
    this.dialog.open(AdddialogueComponent);
  }
  dataSource = ELEMENT_DATA;
  name(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/byname",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }
  email(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/byemail",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }
  phnumber(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/byphno",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }
  dob(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/bydob",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }
  loc(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/byloc",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }
  address(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/byaddress",[d]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(d=="")
      this.dataSource=MAIN_DATA;
    })
  }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/getdetails").subscribe(data=>{
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i]);
        MAIN_DATA.push(key[i]);
      }
      console.log(data)
    })
  }
}
export let ELEMENT_DATA: any = [];
export let MAIN_DATA: any = [];