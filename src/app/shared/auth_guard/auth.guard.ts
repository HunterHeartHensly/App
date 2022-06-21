import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninComponent } from 'src/app/components/auth/signin/signin.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (localStorage.getItem('token') != null)
      return true;
    else {
      this.router.navigate(['/']);
      return false; 
    }
  }

}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): boolean {
  //   if (this.signinComponent.isLoggedIn()) {
  //     const userRole = this.signinComponent.getRole();
  //     if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   this.router.navigate(['/']);
  //   return false;
  // }
  

