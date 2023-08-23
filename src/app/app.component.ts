import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { PageHeaderService } from './page-header/page-header.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
    title = 'test-app';
    cookieValue: string = "";

    constructor(
        private cookieService: CookieService,
        private pageHeaderService: PageHeaderService,
        )
    {
        this.cookieService.set('pm-tool', 'stay-logged-in', 7);
        this.cookieValue = this.cookieService.get('pm-tool');
    }

    // note => https://tagmanager.google.com/#/home
    // Google Tag Manager - Configuration from Cookies out of the code...
    // ------------------------------------------------------------------
    ngOnInit(): void {
        this.cookieValue = this.cookieService.get('pm-tool');
        if(this.cookieValue == "stay-logged-in") {
            this.pageHeaderService.setHeaderIsPrivate(true);
            // this.router.navigate(['dashboard']);
        }
    }

}
