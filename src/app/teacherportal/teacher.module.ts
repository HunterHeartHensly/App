import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeachernavbarComponent } from './teachernavbar/teachernavbar.component';



@NgModule({
  declarations: [
    TeacherComponent,
    TeachernavbarComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule
  ],
  exports: [TeachernavbarComponent]
})
export class TeacherModule { }
