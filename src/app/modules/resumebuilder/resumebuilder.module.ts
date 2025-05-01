import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumebuilderComponent } from './resumebuilder.component';

const routes:Routes=[
  {
    path:'',
    component:ResumebuilderComponent,
    children:[
      {
        path:'resume',
        component:ResumeComponent
      },
      {path:'',pathMatch:'full',redirectTo:'resume'},
      {path:'**',pathMatch:'full',redirectTo:'resume'}
    ]
  }
]


@NgModule({
  declarations: [
    ResumeComponent,
    ResumebuilderComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ResumebuilderModule { }
