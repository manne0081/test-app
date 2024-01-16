import { Component, OnInit, inject } from '@angular/core';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { AppService } from './app.service';
import { PageHeaderService } from './page-header/page-header.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    title = 'test-app';

    cookieValue: string = "";

    constructor(private cookieService: CookieService,
                private appService: AppService,
                private router: Router,
                private location: Location,
                ) {
    }

    // note =>
    // tagmanager.google - Configuration from Cookies out of the code...
    // -----------------------------------------------------------------
    ngOnInit(): void {
        this.appService.setLocalHost();
        this.appService.setIsLocalhost();

        this.cookieValue = this.cookieService.get('pmTool-login');
        this.cookieValue = this.cookieService.get('pmTool-login-7');

        if (this.cookieValue == "login") {
            // console.log("cookie-value ist: " + this.cookieValue);
            // this.pageHeaderService.setHeaderIsPrivate(true);
            this.router.navigate(['dashboard']);
        } else {
            // console.log("es gibt keinen cookie-value");
            this.router.navigate(['home']);
        }

        // Solange die cookies nicht funktionieren
        // todo
        this.router.navigate(['employees']);
    }



}
