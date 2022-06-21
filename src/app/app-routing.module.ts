import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './adminportal/admin/admin.module';

import { SigninComponent } from './components/auth/signin/signin.component';








const routes: Routes = [
  {path:'', component:SigninComponent},

  {path: 'adminportal', loadChildren: () => import('./adminportal/admin/admin.module').then(m => m.AdminModule)},

  {path: 'teacherportal', loadChildren: () => import('./teacherportal/teacher.module').then(m => m.TeacherModule)},

  {path: 'studentportal', loadChildren: () => import('./studentportal/student.module').then(m => m.StudentModule)}

 
  //src\app\components\studentmanagement\module1-routing.module.ts
  //src\app\components\studentmanagement\module1.module.ts
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AdminModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
