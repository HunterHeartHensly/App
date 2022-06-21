import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router : Router) { }


  RegisterAndAddStudent(data : any) {
    return this.http.post<any>("https://localhost:7050/api/Register/RegisterAddStudent", data )
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  Login(data : any) {
    return this.http.post<any>("https://localhost:7050/api/Login/Login", data )
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }))
  }

  onLogout(){
    
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

getRoleFromLocalStorage(){
   localStorage.getItem('role');
}

 getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  } 

}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

