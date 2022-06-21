import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { StudentmanagementService } from 'src/app/shared/studentmanagement.service';

@Component({
  selector: 'app-teachernavbar',
  templateUrl: './teachernavbar.component.html',
  styleUrls: ['./teachernavbar.component.css']
})
export class TeachernavbarComponent implements OnInit {
  role: any;
  message: any;

  constructor(private authService: AuthService,  private service: StudentmanagementService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');

    this.service.recievedMessage().subscribe((d) => {
      this.message = d;
      
      //console.log(d);

    })

   this.service.sendMessage(localStorage.getItem('role'))
  }

  onLogout() {
    this.authService.onLogout();
  }

}
