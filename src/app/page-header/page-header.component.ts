import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss']
})

export class PageHeaderComponent {

    constructor(private cookieService: CookieService,
                private router: Router, ) {}

    logout() {
        this.cookieService.delete('pmTool-login');
        this.cookieService.delete('pmTool-login-7');
        this.router.navigate(['home']);
    }
}
