import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { SigninComponent } from './components/auth/signin/signin.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth_guard/auth.intecepter';

import { StudentmanagementService } from './shared/studentmanagement.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherModule } from './teacherportal/teacher.module';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   // NgxPaginationModule,
    BrowserAnimationsModule,  
    
  ],

  providers: [StudentmanagementService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
