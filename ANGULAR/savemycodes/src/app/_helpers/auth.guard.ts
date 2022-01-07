import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserService } from './../users/services/user.service';

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        //private userService: UserService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            // logged in so return true
            return true;
        }


        // not logged in so redirect to login page with the return url
        this.router.navigate(['/users/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}