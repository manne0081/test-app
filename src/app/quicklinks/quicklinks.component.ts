import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

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

    constructor() {}

    quicklinkMoreSelected(quicklink: any):void {
        window.alert(quicklink + ": 3P-Menu selected!");
    }

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.quicklinks, event.previousIndex, event.currentIndex);
    }

    openQuicklink(item: any): void {
        window.alert(item + " clicked!");
    }

    openContext(item: any): void {
        window.alert("Context " + item + " clicked!");
    }

}
