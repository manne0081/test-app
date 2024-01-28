import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-test-fourth',
    templateUrl: './test-fourth.component.html',
    styleUrls: ['./test-fourth.component.scss']
})

export class TestFourthComponent implements OnInit{
    isUserAdmin: boolean = true;

    activeUrl: string = '';
    classItemSearching: string = 'navigation-item';
    classItemDashboard: string = 'navigation-item';
	classItemWorkspace: string = 'navigation-item';
	classItemContact: string = 'navigation-item';
	classItemOperation: string = 'navigation-item';
	classItemOrderProcessing: string = 'navigation-item';

    contentValue:string = "";


    constructor(private route: Router) {
    }


    ngOnInit(): void {
        this.setCssClassToItem(this.route.url);
    }




    testSetUserIsAdmin(): void {
        this.isUserAdmin = !this.isUserAdmin;
    }



    setCssClassToItem(route: string): void {
		if (route.substring(0,10) == "/dashboard") {
			// console.log("navigationComponent -> url == " + route.substring(0,10));
            this.activeUrl = "/dashboard";
            this.contentValue = this.activeUrl + " works!"
			this.classItemSearching = "test1 pre-active";
			this.classItemDashboard = "test1 active";
			this.classItemWorkspace = "test1 post-active";
		}
		if (route.substring(0,10) == "/workspace") {
			// console.log("navigationComponent -> url == " + route.substring(0,8));
            this.activeUrl = "/workspace";
            this.contentValue = this.activeUrl + " works!"
			this.classItemDashboard = "test1 pre-active";
			this.classItemWorkspace = "test1 active";
			this.classItemContact = "test1 post-active";
		}
        if (route.substring(0,8) == "/contact") {
			// console.log("navigationComponent -> url == " + route.substring(0,8));
            this.activeUrl = "/contact";
            this.contentValue = this.activeUrl + " works!"
			this.classItemWorkspace = "test1 pre-active";
			this.classItemContact = "test1 active";
			this.classItemOperation = "test1 post-active";
		}
        if (route.substring(0,10) == "/operation") {
			// console.log("navigationComponent -> url == " + route.substring(0,8));
            this.activeUrl = "/operation";
            this.contentValue = this.activeUrl + " works!"
			this.classItemContact = "test1 pre-active";
			this.classItemOperation = "test1 active";
			this.classItemOrderProcessing = "test1 post-active";
		}
	}




}
