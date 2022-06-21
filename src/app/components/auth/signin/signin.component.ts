import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/shared/auth.service';
import { StudentmanagementService } from 'src/app/shared/studentmanagement.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  message: any;
  submitted = false;
  
  public signinForm !: FormGroup
  
  constructor(private formBuilder: FormBuilder,
    private http: HttpClient, private router: Router,
    private service: StudentmanagementService, private authService: AuthService) { }

  ngOnInit(): void {

    this.service.sendMessage(localStorage.getItem("role"));
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(4)]],

    })
   
  }
  // get email() {
  //   return this.signinForm.get('email')
  // }

  // get password() {
  //   return this.signinForm.get('password')
  // }

  get f() { return this.signinForm.controls; }



  signin() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.signinForm.invalid) {
        return;
    }

    this.authService.Login(this.signinForm.value)
    .subscribe(
      data => {
      console.log(this.signinForm.value);
      localStorage.setItem('token', data.token);

      // alert("Login SuccessFully");
      // this.router.navigateByUrl('/home');
     
      var decodedToken= this.getDecodedAccessToken(data.token);
      localStorage.setItem('role',decodedToken.role);
      localStorage.setItem('UserId',decodedToken.UserID);
      console.log(decodedToken);
      
      var msg = decodedToken.role; 
      this.message =msg;


    

      if(decodedToken.role == "Admin")
      {  
        alert("Login SuccessFully");
        
         this.service.sendMessage(this.message)
        
        this.router.navigateByUrl('/adminportal/admin');
       
      }
      else if(decodedToken.role == "Teacher")
      {
        alert("Login SuccessFully");
       this.service.sendMessage(this.message)
        this.router.navigateByUrl('/teacherportal/teacher');
      }
      else if(decodedToken.role == "Student")
      {
        alert("Login SuccessFully");
       this.service.sendMessage(this.message)
        this.router.navigateByUrl('/studentportal/student');
      }

    },
    err => {
      alert("Incorrect UserName Or Password");
      })       
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  } 

  // sendingMessage(message: any)
  // {
  //   this.service.sendMessage(message);
  //   this.signin();
  // }

}

