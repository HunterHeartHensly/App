import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { StudentmanagementService } from 'src/app/shared/studentmanagement.service';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrls: ['./adminnavbar.component.css']
})
export class AdminnavbarComponent implements OnInit {
  role: any;
  message: any;

  constructor(private authService: AuthService, private service: StudentmanagementService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    //this.authService.getRoleFromLocalStorage();

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
