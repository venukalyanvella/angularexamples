import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynaicform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
const routes:Routes =[
  {
    path:'',
    component:DynamicFormComponent,
    children:[
      {
        path:'employee',
        component:EmployeeComponent
      },
{
  path:'',pathMatch:'full',redirectTo:'employee'
},
{
  path:'**',pathMatch:'full',redirectTo:'employee'
}

    ]
  }
]


@NgModule({
  declarations: [
    EmployeeComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
})
export class DynamicformsModule { }
