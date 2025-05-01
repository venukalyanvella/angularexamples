import { Routes } from "@angular/router";




const routing:Routes = [
  {
    path:'dynamicform',
    loadChildren: () => import('./modules/dynamicforms/dynamicforms.module').then(m => m.DynamicformsModule)
  }
]



export {routing};
