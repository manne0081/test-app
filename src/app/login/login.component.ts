import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {

    constructor(private cookieService: CookieService,
                private router: Router,)
    {}

    login() {
        this.cookieService.set('pmTool-login', 'login');
        this.router.navigate(['dashboard']);
    }

    stayLoggedIn() {
        this.cookieService.set('pmTool-login', 'login');
        this.cookieService.set('pmTool-login-7', 'stay-logged-in', 7);
        this.router.navigate(['dashboard']);
    }
}
