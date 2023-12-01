import { Component } from '@angular/core';

@Component({
    selector: 'app-test-third',
    templateUrl: './test-third.component.html',
    styleUrls: ['./test-third.component.scss']
})

export class TestThirdComponent {
    quicklinks: String[] = [
		'First-Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink','Quicklink',
		'Last-Quicklink',
	];

	tiles: String[] = [
		'First-Tile',
		'Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile',
		'Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile',
		'Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile',
		'Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile',
		'Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile','Tile',
		'Last-Tile',
	];

	addInfo: String = "";

	quicklinksVisible:boolean = true;
	addInfoVisible:boolean = true;
    activeFiltersVisible:boolean = false;

    constructor() { }

    ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;

		console.log("test-second > ngOnInit");
    }

	logout() {
	}

	setMyQuicklinksVisible() {
		if (this.quicklinksVisible) {
			this.quicklinksVisible = false;
			console.log("test-second > setQuicklinks = false");
			console.log(this.quicklinksVisible);
			console.log(this.addInfoVisible);
		} else {
			this.quicklinksVisible = true;
			console.log("test-second > setQuicklinks = true");
			console.log(this.quicklinksVisible);
			console.log(this.addInfoVisible);
		}
	}

	setAddInfoVisible() {
		if (this.addInfoVisible) {
			this.addInfoVisible = false;
			console.log("test-second > setAdditionalInformationVisible = false");
			console.log(this.addInfoVisible);
			console.log(this.quicklinksVisible);
		} else {
			this.addInfoVisible = true;
			console.log("test-second > setAdditionalInformationVisible = true");
			console.log(this.addInfoVisible);
			console.log(this.quicklinksVisible);
		}
	}

    setActiveFiltersVisible() {
        if (this.activeFiltersVisible) {
            this.activeFiltersVisible = false;
        } else {
            this.activeFiltersVisible = true;
        }
    }

	setAddInfo(test: String) {
		this.addInfo = test;
	}

    quicklinkMoreSelected(quicklink: any, i: number):void {
        window.alert(quicklink + " " + (i + 1) + " > 3P-Menu selected!");
    }

    openObject(object:any, i: number):void {
        window.alert(object + " " + (i + 1) + " > open!");
    }
}
