import { Component, OnInit } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adddialogue',
  templateUrl: './adddialogue.component.html',
  styleUrls: ['./adddialogue.component.css']
})
export class AdddialogueComponent implements OnInit {
  constructor(private http:HttpClient,private dialog:MatDialog) { }

  submit(name:any,email:any,number:any,date:any,location:any,gender:any,address:any){
    this.http.post("http://localhost:3000/adddetails",[name.value,email.value,number.value,date.value,location.value,gender.value,address.value]).subscribe(data=>{
    })
    this.dialog.closeAll();
    window.location.reload();
  }
  ngOnInit(): void {
  }
}
