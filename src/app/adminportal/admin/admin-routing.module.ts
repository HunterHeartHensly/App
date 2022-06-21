import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "src/app/shared/auth_guard/admin.guard";
import { AuthGuard } from "src/app/shared/auth_guard/auth.guard";
import { AdminComponent } from "./admin/admin.component";
import { RegisterstudentComponent } from "./registerstudent/registerstudent.component";
import { StudentComponent } from "./student/student.component";
import { TeacherComponent } from "./teacher/teacher.component";

const routes: Routes = [

  
    {path:'admin', component:AdminComponent,canActivate:[AuthGuard,AdminGuard], data: { role: 'Admin' }},

    {path:'student', component:StudentComponent,canActivate:[AuthGuard,AdminGuard], data: { role: 'Admin' }},
    {path:'teacher', component:TeacherComponent,canActivate:[AuthGuard,AdminGuard], data: { role: 'Admin' }},
    
    {path:'registerstudent', component:RegisterstudentComponent,canActivate:[AuthGuard,AdminGuard], data: { role: 'Admin' }},


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AdminRoutingModule { }