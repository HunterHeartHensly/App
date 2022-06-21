import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { StudentmanagementService } from 'src/app/shared/studentmanagement.service';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.component.html',
  styleUrls: ['./registerstudent.component.css']
})
export class RegisterstudentComponent implements OnInit {

  public studentRegisterForm ! : FormGroup

  // dropdownList:any = [] ;
  // dropdownSettings:IDropdownSettings={};

  submitted = false;
  response:any;
  programData: any;
  statusData: any;
  role: any;
 

  constructor(private formBuilder : FormBuilder , 
    private http : HttpClient, private router : Router, 
    private authService: AuthService ,private service: StudentmanagementService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');

    // this.dropdownSettings = {
    //   idField: 'id',
    //   textField: 'name',
    //   enableCheckAll: true,
    //   selectAllText: "Select All Items From List",
    //   unSelectAllText: "UnSelect All Items From List",
    // };

   this.studentRegisterForm = this.formBuilder.group({
     username:['', Validators.required],
     email:['',[Validators.required, Validators.email]],
     password:['',[Validators.required, Validators.minLength(4)]],
     rollnumber:['', Validators.required],

    // Role:['', Validators.required],

     fullname:['', Validators.required],
     fathername:['', Validators.required],
     //address:['', Validators.required],

     currentProgram:['', Validators.required],
     lastProgram:['', Validators.required],
     currentGPA:['', Validators.required],
     status:['', Validators.required],
     //registratioDate:['', Validators.required]
   })

   this.getAllProgram();
   this.getAllStatus();
  }

  get f() { return this.studentRegisterForm.controls; }


  public registerUser()
  {

    this.submitted = true;

    // stop here if form is invalid
    if (this.studentRegisterForm.invalid) {
        return;
    }
    
    console.log(this.studentRegisterForm)
    this.authService.RegisterAndAddStudent(this.studentRegisterForm.value)
    .subscribe((res: any) =>{

      console.log(res)
      if(res.succeeded){
        alert("Added Successfully");
        this.router.navigate(['/adminportal/student'])
      }
      else{
        alert("Error")
        this.response = res.errors  
        console.log(res.errors)
      }

     // this.signupForm.reset();        
  
    },err=>{
      console.log(err);
    })
  }


   getAllProgram(){
    this.service.getProgram()
    .subscribe((res: any)=>{
      this.programData = res;
  
    })
   }

   getAllStatus(){
    this.service.getStatus()
    .subscribe((res: any)=>{
      console.log(res);
      this.statusData = res;
  
    })
   }

   onLogout(){ 
   this.authService.onLogout();
  }

}
