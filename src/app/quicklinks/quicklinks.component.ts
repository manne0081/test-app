import { Component } from '@angular/core';

@Component({
    selector: 'app-quicklinks',
    templateUrl: './quicklinks.component.html',
    styleUrls: ['./quicklinks.component.scss']
})

export class QuicklinksComponent {
    quicklinks = [
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
        {name:'quicklink'},
    ];

    quicklinksVisible:boolean = true;

    quicklinkMoreSelected(quicklink: any):void {
        window.alert(quicklink + ": 3P-Menu selected!");
    }

}
