import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Department } from './department';
 @Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
 })
export class DepartmentComponent implements OnInit {
  constructor(private formBuilder : FormBuilder,private deptService:DepartmentService){}

 ngOnInit(): void {
  this.getAllDepts();

  
  }
  deptList:any=[];
  public getAllDepts(){
    this.deptService.GetAllDepartments().subscribe(result=>{
        this.deptList=result;
    })
  }


  
  deptDetail = this.formBuilder.group({
   
    Deptid: [],
    Deptname: ['']
  });    

  deleteDept(id:number){
    this.deptService.deleteDeptById(id).subscribe(res=>{
      this.getAllDepts();
    });
  }

  saveDepartement() {
   
   const  dept=this.deptDetail.value;

this.deptService.postAddDept(dept).subscribe(res=>{
  this.getAllDepts();
  
});
  }
 updateDept(id:number){
  this.deptService.updateDeptById(id).subscribe(res=>{
    this.getAllDepts();
    });
  }


  


}