import { Component } from '@angular/core';
import { Employee } from './test-thirds';
import { TestThirdService } from './test-third.service';

@Component({
    selector: 'app-test-third',
    templateUrl: './test-third.component.html',
    styleUrls: ['./test-third.component.scss']
})

export class TestThirdComponent {
    quicklinksVisible:boolean = true;
    addInfoVisible:boolean = true;
    addInfoDetail:boolean = false;
    activeFiltersVisible:boolean = false;

    quicklinks: String[] = [
		'First-Quicklink',
		'Home', 'Profil', 'Einstellungen', 'Suche', 'Nachrichten', 'Freunde', 'Aktivitäten', 'Benachrichtigungen', 'Hilfe', 'FAQ',
        'Konto', 'Feed', 'Galerie', 'Entdecken', 'Favoriten', 'Chats', 'Gruppen', 'Kalender', 'Statistiken', 'Upgrade', 'Logout',
		'Last-Quicklink',
	];
    employees: Employee[] = [];
    employeesSelected: Employee[] = [];
	addInfo = {} as Employee;

    allSelected: any;


    constructor(private employeeService: TestThirdService) {
    }


    ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;
		this.getEmployees();
    }


    // GETTER / SETTER
    // ***************
    getEmployees(): void {
        this.employeeService.getEmployees()
            .subscribe(employees => this.employees = employees);
    }


    // FRONTEND-Function
    // *****************
	setMyQuicklinksVisible() {
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

    openObject(object: any):void {
        // window.alert(object.firstName + ": Open object");
        window.alert(object.name + ": Open object");
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



    // Funktion zur Generierung eines zufälligen Datums in einem bestimmten Bereich
    randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    logout() {
    }
}
