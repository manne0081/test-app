import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.scss']
})

export class PrivateComponent implements OnInit {
    quicklinksVisible?: boolean;
    addInfoVisible?: boolean;

    constructor(private route: Router) {
    }

    ngOnInit(): void {
        this.toggleQuicklinkVisibility();
        this.toggleAddInfoVisibility();
    }

    toggleQuicklinkVisibility(): void {
        this.quicklinksVisible = !this.quicklinksVisible;
    }

    toggleAddInfoVisibility(): void {
        this.addInfoVisible = !this.addInfoVisible;
    }

}
