import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
    classFavorite: string ="";
    classDashboard: string ="";
    classWorkspace: string ="";
    classContacts: string ="";
    classOperations: string ="";
    classOrderProcessing: string ="";
    classAccounting: string ="";
    classProductManagement: string ="";
    classContracting: string ="";
    classToolsAssets: string ="";
    classStatisticsReporting: string ="";
    classPlaceholder: string ="";

    constructor (private router: Router) {
    }

    ngOnInit(): void {
        this.setItemClass("/dashboard");
    }

    setItemClass(url: string): void {
        console.log("url: " + url);
        if (url == "/dashboard") {
            this.classFavorite = "pre-active";
            this.classDashboard = "active";
            this.classWorkspace = "post-active";
            this.classContacts = "";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/workspace") {
            this.classFavorite = "";
            this.classDashboard = "pre-active";
            this.classWorkspace = "active";
            this.classContacts = "post-active";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/contacts") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = "pre-active"
            this.classContacts = "active"
            this.classOperations = "post-active";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/operations") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = "pre-active"
            this.classOperations = "active";
            this.classOrderProcessing = "post-active";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/orderProcessing") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "pre-active";
            this.classOrderProcessing = "active";
            this.classAccounting = "post-active";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/accounting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "pre-active";
            this.classAccounting = "active";
            this.classProductManagement = "post-active";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/productManagement") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "pre-active";
            this.classProductManagement = "active";
            this.classContracting = "post-active";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/contracting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "pre-active";
            this.classContracting = "active";
            this.classToolsAssets = "post-active";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/toolsAssets") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "pre-active";
            this.classToolsAssets = "active";
            this.classStatisticsReporting = "post-active";
            this.classPlaceholder = "";
        };
        if (url == "/statisticsReporting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "pre-active";
            this.classStatisticsReporting = "active";
            this.classPlaceholder = "post-active";
        };
    }
}
