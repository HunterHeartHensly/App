import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
  }

  onLogout(){
    this.authService.onLogout();
  }

}
