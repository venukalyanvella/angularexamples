import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'employee',
    loadChildren: () => import('./modules/dynamicforms/dynamicforms.module').then(m => m.DynamicformsModule)
  },
  {
    path:'resumebuilder',
    loadChildren: () => import('./modules/resumebuilder/resumebuilder.module').then(m => m.ResumebuilderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
