import { Component } from '@angular/core';

import { Employee } from './test-thirds';
import { EMPLOYEES } from './test-thirds-mock';
import { TestThirdService } from './test-third.service';

@Component({
    selector: 'app-test-third',
    templateUrl: './test-third.component.html',
    styleUrls: ['./test-third.component.scss']
})

export class TestThirdComponent {
    quicklinks: String[] = [
		'First-Quicklink',
		'Robby Bleck', 'Profil', 'Einstellungen', 'Suche', 'Nachrichten', 'Freunde', 'Aktivitäten', 'Benachrichtigungen', 'Hilfe', 'FAQ',
        'Konto', 'Feed', 'Galerie', 'Entdecken', 'Favoriten', 'Chats', 'Gruppen', 'Kalender', 'Statistiken', 'Upgrade', 'Logout',
		'Last-Quicklink',
	];
    employees: Employee[] = [];

    quicklinksVisible:boolean = true;
    addInfoVisible:boolean = true;
    addInfoDetail:boolean = false;
    activeFiltersVisible:boolean = false;
    searchingValue: string = "";

	addInfo = {} as Employee;
    allSelected: any;

    constructor(private employeeService: TestThirdService) {
    }

    ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;
		this.getAllEmployees();
    }


    // GETTER / SETTER
    // ***************
    getAllEmployees(): void {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }

    getEmployee(id: number): Employee {
		const employee = EMPLOYEES.find(h => h.id === id)!;
		return employee;
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

        this.getFilteredEmployees();
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
            this.getAllEmployees();
        }
    }

    // Searching employees by searching-field at the tile-header
    // *********************************************************
    searchingEmployees(): void {
        this.getAllEmployees();
        const employeesBySearching = this.employees.filter(item => item.lastName.toLocaleLowerCase().includes(this.searchingValue));
        this.employees = employeesBySearching;
    }



    // testFunction
    // ************
    // test(): void {
    //     const found = this.employees.find((element) => element.id > 5);
    //     const result1 = this.employees.find(({ firstName }) => firstName === "Robby" && "Anna");
    // }

    // Funktion zur Generierung eines zufälligen Datums in einem bestimmten Bereich
    // randomDate(start: Date, end: Date): Date {
    //     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    // }

    // logout() {
    // }
}
