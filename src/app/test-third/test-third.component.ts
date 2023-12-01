import { Component } from '@angular/core';
import { Employee } from './test';

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




    constructor() { }

    ngOnInit(): void {
		this.quicklinksVisible = true;
		this.addInfoVisible = true;

		console.log("test-second > ngOnInit");



        // Testdaten für 50 Mitarbeiter erstellen
        for (let i = 1; i <= 25; i++) {

            const employee: Employee = {
                firstName: `Vorname ${i}`,
                lastName: `Nachname ${i}`,
                birthday: this.randomDate(new Date(1970, 0, 1), new Date(2000, 11, 31)),
                addresses: {
                    primaryResidence: {
                        street: `Hauptstraße ${i}`,
                        houseNumber: `${i * 2}`,
                        zip: `PLZ ${i}`,
                        city: `Ort ${i}`,
                    },
                    secondaryResidence: {
                        street: `Zweitstraße ${i}`,
                        houseNumber: `${i * 2}`,
                        zip: `ZweitPLZ ${i}`,
                        city: `ZweitOrt ${i}`,
                    },
                },
                contacts: {
                    fon: '02604/45498877',
                    mobile: '0166/1770863',
                    email: 'rbleck@hoster.none',
                }
            };

            this.employees.push(employee);
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

    openObject(object:any):void {
        window.alert(object.firstName + ": Open object");
    }






    // Funktion zur Generierung eines zufälligen Datums in einem bestimmten Bereich
    randomDate(start: Date, end: Date): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }


}
