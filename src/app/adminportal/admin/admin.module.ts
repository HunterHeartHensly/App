import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { RegisterstudentComponent } from './registerstudent/registerstudent.component';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';



@NgModule({
  declarations: [
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    RegisterstudentComponent,
    AdminnavbarComponent
  ],
  imports: [
    CommonModule,
    

    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSortModule,
   
    AdminRoutingModule,
    NgbModule,
  ],
  exports: [AdminnavbarComponent]
  // ,
  // exports: [NavbarComponent],
})
export class AdminModule { }
