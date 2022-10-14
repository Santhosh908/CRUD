import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdddialogueComponent } from '../adddialogue/adddialogue.component';
import { HttpClient } from '@angular/common/http';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { RandomdialogComponent } from '../randomdialog/randomdialog.component';

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
  opendia2(){
    this.dialog.open(RandomdialogComponent,{
      height:'70%'
    });
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
  };
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
  dobf(data1:any){
    var d=data1.value
    if(d.length==0){
    this.dataSource=MAIN_DATA;
    console.log(d+"null");
    }
    else{
      console.log("sent");
    this.http.post("http://localhost:3000/bydobf",[data1.value]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      
    })
  }
  }
  gen(data1:any){
    var d=data1.value
    this.http.post("http://localhost:3000/bygen",[d]).subscribe(data=>{
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
    console.log(d+"here")
    this.http.post("http://localhost:3000/byaddress/find",[d]).subscribe(data=>{
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
  edit(d:any){
    this.dialog.open(EditdialogComponent,{
      data:{
        id:d
      }
    })
  }
  delit(id:any){
    var k=id;
    console.log(k);
    //console.log(this.http.post("http://localhost:3000/deldetails",[k]))
    this.http.post("http://localhost:3000/deldetails/doit",[k]).subscribe(data=>{
      ELEMENT_DATA=[]
      var key=Object.values(data)
      var l=key.length;
      for(let i=0;i<l;i++){
        ELEMENT_DATA.push(key[i])
      }
      this.dataSource=ELEMENT_DATA;
      console.log(data);
      if(k=="")
      this.dataSource=MAIN_DATA;
      window.location.reload();
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
    })
  }
}
export let ELEMENT_DATA: any = [];
export let MAIN_DATA: any = [];