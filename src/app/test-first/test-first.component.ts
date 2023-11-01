import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-first',
  templateUrl: './test-first.component.html',
  styleUrls: ['./test-first.component.scss']
})

export class TestFirstComponent implements OnInit {
	// arrays
	// ******
	quicklinks: String[] = [
		'Quicklink',
		'Quicklink',
		'Quicklink',
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Quicklink',		
		'Last-Quicklink',		
	];

	tiles: String[] = [
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Tile',
		'Last-Tile',
	]

	// variables
	// *********
	addInfo: String = "";

	additionalActionsExpanded = false;
	myQuicklinksVisible = true;
	additionalInformationVisible = true;

	constructor() { }

    ngOnInit(): void {
    }

	logout() {		
	}

	setAdditionalActionsExpanded(isExpanded: boolean) {
		this.additionalActionsExpanded = isExpanded;
	}

	setMyQuicklinksVisible(visible: boolean) {
		this.myQuicklinksVisible = visible;
	}

	setAddInfo(test: String) {
		this.addInfo = test;
	}

}
