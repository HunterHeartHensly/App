import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { StudentmanagementService } from 'src/app/shared/studentmanagement.service';
import { EditStudentModel } from 'src/app/shared/studentManagementModel/editstudentmodel';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  editStudentModel: EditStudentModel = new EditStudentModel();
  public studentRegisterForm !: FormGroup
  role: any
  studentData:any;
  message: any;
  submitted : any;


  id: any;
  ide: any;
  name: any;
  programData: any;
  statusData: any;

  constructor(private router: Router, private service: StudentmanagementService, 
    private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

    this.studentRegisterForm = this.formBuilder.group({

      //id:[''],
      fullName: ['', Validators.required],
      fatherName: ['', Validators.required],
      address: ['', Validators.required],

      currentProgram: ['', Validators.required],
      lastProgram: ['', Validators.required],
      currentGPA: ['', Validators.required],
      status: ['', Validators.required],
      //rollNumber:['', Validators.required],
      registratioDate: ['', Validators.required]

    })

    this.getStudentById();
    this.getAllProgram();
    this.getAllStatus();
  }

  onLogout(){
    this.authService.onLogout();
  }

  get fullName() {
    return this.studentRegisterForm.get('fullName')
  }
  get fatherName() {
    return this.studentRegisterForm.get('fatherName')
  }
  get address() {
    return this.studentRegisterForm.get('address')
  }
  get currentProgram() {
    return this.studentRegisterForm.get('currentProgram')
  }
  get lastProgram() {
    return this.studentRegisterForm.get('lastProgram')
  }
  get currentGPA() {
    return this.studentRegisterForm.get('currentGPA')
  }

  get status() {
    return this.studentRegisterForm.get('status')
  }

  get registratioDate() {
    return this.studentRegisterForm.get('registratioDate')
  }


  getStudentById(){

    var ide = localStorage.getItem("UserId");
    console.log(ide);

    this.service.getSpecificStudent(ide).subscribe(res=>{
     
     this.studentData=res;
      console.log(res)
      }),
      (err:any)=>console.log(err)

  }



   onEdit(row:any)
   {
      this.id = row.id
      this.studentRegisterForm.controls['fullName'].setValue(row.fullName);
      this.studentRegisterForm.controls['fatherName'].setValue(row.fatherName);
     // this.studentRegisterForm.controls['address'].setValue(row.address);
      this.studentRegisterForm.controls['currentProgram'].setValue(row.currentProgram);
      this.studentRegisterForm.controls['lastProgram'].setValue(row.lastProgram);
      this.studentRegisterForm.controls['currentGPA'].setValue(row.currentGPA);
      this.studentRegisterForm.controls['status'].setValue(row.status);
      //this.studentRegisterForm.controls['rollNumber'].setValue(row.rollNumber);
      this.studentRegisterForm.controls['registratioDate'].setValue(row.registratioDate);

   }

  public editStudentDetail()
   {
   
   
      this.service.editStudentsDetials(this.studentRegisterForm.value , this.id)
      .subscribe(res=>{
        console.log(res);
        alert("Updated Successfully")
        this.studentRegisterForm.reset();
        this.getStudentById();
      },
      err=>console.log(err)
      )
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

}

