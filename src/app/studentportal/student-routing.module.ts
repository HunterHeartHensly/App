import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/auth_guard/auth.guard";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [

   {path:'student', component:StudentComponent,canActivate:[AuthGuard]},
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class StudentRoutingModule { }