import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test-second',
    templateUrl: './test-second.component.html',
    styleUrls: ['./test-second.component.scss']
})

export class TestSecondComponent {
	myQuicklinksVisible:boolean = true;
	additionalInformationVisible:boolean = true;

	constructor() { }

    ngOnInit(): void {
		this.myQuicklinksVisible = true;
		this.additionalInformationVisible = true;

		console.log("test-second > ngOnInit");
    }

	logout() {		
	}

	setMyQuicklinksVisible() {
		if (this.myQuicklinksVisible) {
			this.myQuicklinksVisible = false;
			console.log("test-second > setQuicklinks = false");
			console.log(this.myQuicklinksVisible);
			console.log(this.additionalInformationVisible);
		} else {
			this.myQuicklinksVisible = true;
			console.log("test-second > setQuicklinks = true");
			console.log(this.myQuicklinksVisible);
			console.log(this.additionalInformationVisible);
		}
	}

	setAdditionalInformationVisible() {
		if (this.additionalInformationVisible) {
			this.additionalInformationVisible = false;
			console.log("test-second > setAdditionalInformationVisible = false");
			console.log(this.additionalInformationVisible);
			console.log(this.myQuicklinksVisible);
		} else {
			this.additionalInformationVisible = true;
			console.log("test-second > setAdditionalInformationVisible = true");
			console.log(this.additionalInformationVisible);
			console.log(this.myQuicklinksVisible);
		}
	}

}
