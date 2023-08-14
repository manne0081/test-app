import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.scss']
})

export class MainNavigationComponent implements OnInit{
    activeUrl: string = '';
    classItemDashboard: string = 'navigation-item';
	classItemPartner: string = 'navigation-item';
	classItemTest: string = 'navigation-item';

	classItemSpacer: string = 'navigation-item spacer';

    constructor(private route: Router) {
    }

    ngOnInit(): void {
        this.setCssClassToItem(this.route.url);
    }

    setCssClassToItem(route: string): void {
		if (route.substring(0,10) == "/dashboard") {
			// console.log("navigationComponent -> url == " + route.substring(0,10));
            this.activeUrl = "/dashboard";
			this.classItemDashboard = "navigation-item active";
			this.classItemPartner = "navigation-item post-active";
		}
		if (route.substring(0,8) == "/partner") {
			// console.log("navigationComponent -> url == " + route.substring(0,8));
            this.activeUrl = "/partner";
			this.classItemDashboard = "navigation-item pre-active";
			this.classItemPartner = "navigation-item active";
			this.classItemTest = "navigation-item post-active";
		}
        if (route.substring(0,5) == "/test") {
			// console.log("navigationComponent -> url == " + route.substring(0,8));
            this.activeUrl = "/test";
			this.classItemPartner = "navigation-item pre-active";
			this.classItemTest = "navigation-item active";
			this.classItemSpacer = "navigation-item spacer post-active";
		}
	}
}

