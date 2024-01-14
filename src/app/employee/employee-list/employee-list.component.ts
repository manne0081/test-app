import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { Observable, catchError, tap, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environments';
import { Router } from '@angular/router';

import { Employee } from 'src/app/test-third/test-thirds';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent {
	quicklinks: String[] = [
		'First-Quicklink', 'Robby Bleck', 
	];
	employees: Employee[] = [];
	addInfo = {} as Employee;
    activeFilterAlt: string[] = [];
    activeFilter: { key: string; value: string }[] = [];

    quicklinksVisible:boolean = true;
    addInfoVisible:boolean = true;
    addInfoDetail:boolean = false;
    activeFiltersVisible:boolean = false;
    searchingValue: string = "";

    allSelected: any;

	constructor(private employeeService: EmployeeService,
		private http: HttpClient,
		private ngZone: NgZone,
		private cdRef: ChangeDetectorRef,
		private router: Router,
		private location: Location,
		) {
	}

	ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;
        let isLocalhost: boolean = true;

        if(window.location.hostname != "localhost") {
            isLocalhost = false;
        }

        this.getEmployees(isLocalhost);
    }

	public getEmployees(isLocalhost: boolean) {
        this.employeeService.getEmployeesSql(isLocalhost).subscribe(
            (response: Employee[]) => {
                this.ngZone.run(() => {
                    this.employees = response;
                });                
                // console.log(this.employees);
            },
        );
    }







	// FRONTEND-Function
    // *****************
	setQuicklinksVisible() {
        if (this.quicklinksVisible) {
            this.quicklinksVisible = false;
		} else {
            this.quicklinksVisible = true;
		}
	}

	setAddInfoVisible() {
        if (this.addInfoVisible) {
            this.addInfoVisible = false;
		} else {
            this.addInfoVisible = true;
		}
	}

    setActiveFiltersVisible() {
        if (this.activeFiltersVisible) {
            this.activeFiltersVisible = false;
        } else {
            this.activeFiltersVisible = true;
        }
    }

	setAddInfo(employee: Employee) {
        this.addInfoDetail = true;
        this.addInfo = employee;
	}

    quicklinkMoreSelected(quicklink: any):void {
        window.alert(quicklink + ": 3P-Menu selected!");
    }

    openObject(object: Employee):void {
        window.alert(object.firstName + " " + object.lastName + ": Open object");
    }

    selectAll() {
        for (var i = 0; i < this.employees.length; i++) {
            this.employees[i].selected = this.allSelected;
        }
    }

    checkIfAllSelected() {
        this.allSelected = this.employees.every(function (item: any) {
            return item.selected == true;
        });
    }

    // Filtering employees
    // *******************
    getFilteredEmployees(): void {
        const filter1 = this.employees.filter(person => person.id <= 5);
        const filter2 = filter1.filter(person => person.lastName.toLowerCase().includes("sc"));

        if (this.activeFiltersVisible) {
            this.employees = filter2;
        } else {
            this.getEmployees(true);
        }
    }

    // Searching employees by searching-field at the tile-header
    // *********************************************************
    searchingEmployees(event: KeyboardEvent): void {
        let searchingKey = "searchingValue";
        let searchingValue:string = this.searchingValue;
        let searchingValueLength: number = this.searchingValue.length;
        let isSetFilter = this.activeFilter.findIndex(filter => filter.key === 'searchingValue');  // 0=true and -1=false

        // functionality for the active filter element / area
        // **************************************************
        if (isSetFilter == -1) {
            // set filter
            this.addActiveFilter(searchingKey, searchingValue);
            // show active filter
            this.activeFiltersVisible = true;

        } else {
            // update filter
            this.activeFilter[isSetFilter].value = this.searchingValue;

            if (this.searchingValue == "") {
                // find index of the element about the key
                const index = this.activeFilter.findIndex(filter => filter.key === searchingKey);

                // remove the filter element
                if (index !== -1) {
                    this.activeFilter.splice(index, 1);
                }

                // hide the active filters
                if (this.activeFilter.length == 0) {
                    this.activeFiltersVisible = false;
                }
            }
        }

        // set employees by searching-value
        // ********************************
        this.getEmployees(true);
        const employeesBySearching = this.employees.filter(item => item.lastName.toLocaleLowerCase().includes(this.searchingValue));
        this.employees = employeesBySearching;
    }

    addActiveFilter(filtername: string, searchingValue: string): void {
        this.activeFilter.push({ key: filtername, value: searchingValue });
    }

    closeFilter(filterId: number): void {
        if (filterId > -1) {
            this.activeFilter.splice(filterId, 1);

            const index = this.activeFilter.findIndex(filter => filter.key === 'searchingValue');
            if (index == -1) {
                this.searchingValue = "";
                this.getEmployees(true);
            }
        }

        if (this.activeFilter.length == 0) {
            this.activeFiltersVisible = false;
            this.searchingValue = "";
            this.getEmployees(true);
        }
    }

    

    // app-test
    testFunction():void {
        this.activeFiltersVisible = true;
        this.addActiveFilter("test", "ID<5")
    }

}
