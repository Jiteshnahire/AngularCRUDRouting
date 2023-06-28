import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
//import * as api from "../apiUrls";
@Injectable({
    providedIn:'root'
})
export class DepartmentService{
 constructor(private http:HttpClient){

 }
 public GetAllDepartments():Observable<any>{
    return this.http.get<any>("http://localhost:51040/api/Department/GetAllDepartments");
 }
 public deleteDeptById(id:number):Observable<any>{
  return this.http.get<any>("http://localhost:51040/api/Department/DeleteDepartment/"+id);
}
 public postAddDept(dept:any):Observable<any>{
    // const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     })
    //   };
    //   httpOptions.headers = httpOptions.headers.set('Authorization', '')
    return this.http.post<any>("http://localhost:51040/api/Department/AddDepartment",dept);
 }
public updateDeptById(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:51040/api/Department/UpdateDepartment"+id);
 }
}