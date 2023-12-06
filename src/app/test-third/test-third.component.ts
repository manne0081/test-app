import { Component } from '@angular/core';
import { Employee } from './test-thirds';

@Component({
    selector: 'app-test-third',
    templateUrl: './test-third.component.html',
    styleUrls: ['./test-third.component.scss']
})

export class TestThirdComponent {
    quicklinks: String[] = [
		'First-Quicklink',
		'Home', 'Profil', 'Einstellungen', 'Suche', 'Nachrichten', 'Freunde', 'Aktivitäten', 'Benachrichtigungen', 'Hilfe', 'FAQ',
        'Konto', 'Feed', 'Galerie', 'Entdecken', 'Favoriten', 'Chats', 'Gruppen', 'Kalender', 'Statistiken', 'Upgrade', 'Logout',
		'Last-Quicklink',
	];

    employees: Employee[] = [];
	addInfo = {} as Employee;

	quicklinksVisible:boolean = true;
	addInfoVisible:boolean = true;
    activeFiltersVisible:boolean = false;

    allSelected: any;
    names: any;

    constructor() {

    }

    ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;

		console.log("test-second > ngOnInit");

        this.names = [
            { name: 'First Tile', selected: false },
            { name: 'Prashobh', selected: false }, { name: 'Abraham', selected: false }, { name: 'karan', selected: false },
            { name: 'Anil', selected: false }, { name: 'Sam', selected: false }, { name: 'Natasha', selected: false },
            { name: 'Marry', selected: false }, { name: 'Zian', selected: false }, { name: 'karan', selected: false },
            { name: 'Prashobh', selected: false }, { name: 'Abraham', selected: false }, { name: 'Anil', selected: false },
            { name: 'Sam', selected: false }, { name: 'Natasha', selected: false }, { name: 'Marry', selected: false },
            { name: 'Zian', selected: false }, { name: 'karan', selected: false }, { name: 'Prashobh', selected: false },
            { name: 'Abraham', selected: false }, { name: 'Anil', selected: false }, { name: 'Sam', selected: false },
            { name: 'Natasha', selected: false }, { name: 'Marry', selected: false }, { name: 'Zian', selected: false },
            { name: 'Last Tile', selected: false },
        ];

        // Testdaten für 50 Mitarbeiter erstellen
        for (let i = 1; i <= 2; i++) {

            const employee: Employee[] = [
                {id: 0,
                    number: 'PT-001000',
                    salutation: 'Herr',
                    title: '',
                    firstName: 'Robby',
                    lastName: 'Bleck',
                    birthday: new Date(1980, 10, 5),
                    addresses: {
                //         primaryResidence {
                            street: 'Am Hartenberg',
                //             houseNumber: '64 b',
                //             postCode: '56377',
                //             city: 'Seelbach',
                //         }
                    },
                //     contacts: {
                //         fon: '02604/45498877',
                //         mobile: '0166/1770863',
                //         email: 'rbleck@hoster.none',
                //     },
                },
            ];

            // this.employees.push(employee);
        }
    }



	logout() {
	}

	setMyQuicklinksVisible() {
		if (this.quicklinksVisible) {
			this.quicklinksVisible = false;
			// console.log("test-second > setQuicklinks = false");
			// console.log(this.quicklinksVisible);
			// console.log(this.addInfoVisible);
		} else {
			this.quicklinksVisible = true;
			// console.log("test-second > setQuicklinks = true");
			// console.log(this.quicklinksVisible);
			// console.log(this.addInfoVisible);
		}
	}

	setAddInfoVisible() {
		if (this.addInfoVisible) {
			this.addInfoVisible = false;
			// console.log("test-second > setAdditionalInformationVisible = false");
			// console.log(this.addInfoVisible);
			// console.log(this.quicklinksVisible);
		} else {
			this.addInfoVisible = true;
			// console.log("test-second > setAdditionalInformationVisible = true");
			// console.log(this.addInfoVisible);
			// console.log(this.quicklinksVisible);
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
        for (var i = 0; i < this.names.length; i++) {
            this.names[i].selected = this.allSelected;
        }

    }

    checkIfAllSelected() {
        this.allSelected = this.names.every(function (item: any) {
            return item.selected == true;
        });
    }



    // Funktion zur Generierung eines zufälligen Datums in einem bestimmten Bereich
    randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

}
