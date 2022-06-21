import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student/student.component';
import { StudentnavbarComponent } from './studentnavbar/studentnavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentmanagementService } from '../shared/studentmanagement.service';



@NgModule({
  declarations: [
    StudentComponent,
    StudentnavbarComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    //StudentmanagementService

  ]
   ,
  exports: [StudentnavbarComponent], 
})
export class StudentModule { }
