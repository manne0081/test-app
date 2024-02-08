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
    classContact: string ="";

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
            this.classContact = "";
        };
        if (url == "/workspace") {
            this.classFavorite = "";
            this.classDashboard = "pre-active";
            this.classWorkspace = "active";
            this.classContact = "post-active";
        };
        if (url == "/contact") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = "pre-active"
            this.classContact = "active"
        };
    }
}
