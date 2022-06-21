import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/auth_guard/auth.guard";
import { TeacherComponent } from "./teacher/teacher.component";

const routes: Routes = [

    {path:'teacher', component:TeacherComponent,canActivate:[AuthGuard]},


];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class TeacherRoutingModule { }