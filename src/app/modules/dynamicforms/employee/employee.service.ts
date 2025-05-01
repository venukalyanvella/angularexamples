import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class EmployeeService{
  constructor(private _http: HttpClient) { }

  getEmployeeData() {
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  }

  getEmployeeForm(){
    return this._http.get('./assets/employeeform.json');
  }


}