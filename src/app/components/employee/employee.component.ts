import {  Router } from '@angular/router';
import { Details } from './../../details';
import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
   details:  Details[];
   isUpdate=false;
   isSubmit=true;
   selectedDetail:  Details  = { id :  null , name : null, department : null, address : null, email : null, totalMarks : null, year:  null};
  
  constructor(public apiService: ApiService, public router:Router) {
    
   }
 
  //  log(x){
  //    console.log(x);
  //  }
  ngOnInit() {
  this.getdata(); 
  }
  getdata(){
    this.apiService.readDetails().subscribe((details: Details[])=>{
      this.details = details;
      console.log(this.details+"uptodate");
    });
   }

  createOrUpdate(form){
    if(this.selectedDetail && this.selectedDetail.id){
      form.value.id = this.selectedDetail.id;
      this.apiService.updateDetails(form.value).subscribe((details: Details)=>{
        console.log("Data updated" , details);
        if(details){
        form.value.id=null;
        if(!form.value.id){
          this.selectedDetail.id=null;
        form.reset();}}
        this.getdata();
        });
     this.isUpdate=false;
     this.isSubmit=true;
    }
    else{
      this.apiService.createDetails(form.value).subscribe((details: Details)=>{
        console.log("Data created, ", details);
        if(details){
          this.getdata();
        }
        form.reset();
         });
         
        
    }
    
  
  }
  //for edit data 
  selectedDetails(details: Details){
  this.selectedDetail = details;
  this.isUpdate=true;
  this.isSubmit=false;
  }

  // for deleting data from table
  deleteDetails(id){
    var r = confirm("Are you sure you want to delete");
    if (r == true) {
    this.apiService.deleteDetails(id).subscribe((details: Details)=>{
      for(let i = 0; i < this.details.length; ++i){
      if (this.details[i].id === id) {
        this.details.splice(i,1);
      }
       
      }  
        
    });}
  } 

  onselect(data){
    this.router.navigate(['/view',data.id])
  }
  
}
