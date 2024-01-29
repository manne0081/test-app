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
	classItemContacts: string = 'navigation-item';
	classItemOperations: string = 'navigation-item';
	classItemOrderProcessing: string = 'navigation-item';
	classItemAccounting: string = 'navigation-item';
	classItemProductManagement: string = 'navigation-item';
	classItemContracting: string = 'navigation-item';
	classItemToolsAssets: string = 'navigation-item';
	classItemStatisticsReporting: string = 'navigation-item';
	classItemPlacehoder: string = 'navigation-item';

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
            this.activeUrl = "/dashboard";
            this.contentValue = this.activeUrl + " works!"
			this.classItemSearching = "test1 pre-active";
			this.classItemDashboard = "test1 active";
			this.classItemWorkspace = "test1 post-active";
		}
		if (route.substring(0,10) == "/workspace") {
            this.activeUrl = "/workspace";
            this.contentValue = this.activeUrl + " works!"
			this.classItemDashboard = "test1 pre-active";
			this.classItemWorkspace = "test1 active";
			this.classItemContacts = "test1 post-active";
		}
        if (route.substring(0,8) == "/contact") {
            this.activeUrl = "/contact";
            this.contentValue = this.activeUrl + " works!"
			this.classItemWorkspace = "test1 pre-active";
			this.classItemContacts = "test1 active";
			this.classItemOperations = "test1 post-active";
		}
        if (route.substring(0,10) == "/operation") {
            this.activeUrl = "/operation";
            this.contentValue = this.activeUrl + " works!"
			this.classItemContacts = "test1 pre-active";
			this.classItemOperations = "test1 active";
			this.classItemOrderProcessing = "test1 post-active";
		}
        if (route.substring(0,16) == "/orderProcessing") {
            this.activeUrl = "/orderProcessing";
            this.contentValue = this.activeUrl + " works!"
			this.classItemOperations = "test1 pre-active";
			this.classItemOrderProcessing = "test1 active";
			this.classItemAccounting = "test1 post-active";
		}
        if (route.substring(0,11) == "/accounting") {
            this.activeUrl = "/accounting";
            this.contentValue = this.activeUrl + " works!"
			this.classItemOrderProcessing = "test1 pre-active";
			this.classItemAccounting = "test1 active";
			this.classItemProductManagement = "test1 post-active";
		}
        if (route.substring(0,18) == "/productManagement") {
            this.activeUrl = "/productManagement";
            this.contentValue = this.activeUrl + " works!"
			this.classItemAccounting = "test1 pre-active";
			this.classItemProductManagement = "test1 active";
			this.classItemContracting = "test1 post-active";
		}
        if (route.substring(0,12) == "/contracting") {
            this.activeUrl = "/contracting";
            this.contentValue = this.activeUrl + " works!"
			this.classItemProductManagement = "test1 pre-active";
			this.classItemContracting = "test1 active";
			this.classItemToolsAssets = "test1 post-active";
		}
        if (route.substring(0,12) == "/toolsAssets") {
            this.activeUrl = "/toolsAssets";
            this.contentValue = this.activeUrl + " works!"
			this.classItemContracting = "test1 pre-active";
			this.classItemToolsAssets = "test1 active";
			this.classItemStatisticsReporting = "test1 post-active";
		}
        if (route.substring(0,20) == "/statisticsReporting") {
            this.activeUrl = "/statisticsReporting";
            this.contentValue = this.activeUrl + " works!"
			this.classItemToolsAssets = "test1 pre-active";
			this.classItemStatisticsReporting = "test1 active";
			this.classItemPlacehoder = "test1 post-active";
		}
	}
}
