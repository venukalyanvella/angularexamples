import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeData: any;
  employeeForm:FormGroup |any;
  formFields:any;


  constructor(private _empService:EmployeeService,private fb:FormBuilder) { }
  ngOnInit(): void {
    // this._empService.getEmployeeData().subscribe((data) => {
    //   console.log(data);
    // })
    this.employeeForm= this.fb.group({});

    this._empService.getEmployeeForm().subscribe((data:any) => {
      this.formFields = data;
      this.formFields.forEach((field:any) => {
        const validations =[];
        if(field.validator?.required){
          validations.push(Validators.required);
        }

        this.employeeForm.addControl(field.controlname, this.fb.control('',validations));
      });
    })





  }
}
