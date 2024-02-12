import { Component } from '@angular/core';

@Component({
    selector: 'app-quicklinks',
    templateUrl: './quicklinks.component.html',
    styleUrls: ['./quicklinks.component.scss']
})

export class QuicklinksComponent {
    quicklinks: string[] = [
        "First Quicklink",
        "Lampe",
        "Buch",
        "Tasse",
        "Handy",
        "Blumentopf",
        "Schlüsselbund",
        "Sonnenbrille",
        "Notizbuch",
        "Kaffeetasse",
        "Fernseher",
        "Schere",
        "Rucksack",
        "Uhren",
        "Kissen",
        "Kerze",
        "Kugelschreiber",
        "Kleidung",
        "Kühlschrank",
        "Schuhe",
        "Laptop",
        "Regenschirm",
        "Brille",
        "Taschenlampe",
        "Batterie",
        "Fahrrad",
        "Schlüssel",
        "Fotoapparat",
        "Kopfhörer",
        "Last Quicklink",
    ];

    quicklinksVisible:boolean = true;

    quicklinkMoreSelected(quicklink: any):void {
        window.alert(quicklink + ": 3P-Menu selected!");
    }

}
