import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-first',
  templateUrl: './test-first.component.html',
  styleUrls: ['./test-first.component.scss']
})

export class TestFirstComponent implements OnInit {
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

	isExpanded = false;

	constructor() { }

    ngOnInit(): void {
    }

	logout() {		
	}

	setIsExpanded(isExpanded: boolean) {
		this.isExpanded = isExpanded;
	}



}
