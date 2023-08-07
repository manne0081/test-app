import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'test-app';

    quicklinks = [
        {id: 1, name:'Quicklink 1'},
        {id: 2, name:'Quicklink 2'},
        {id: 3, name:'Quicklink 3'},
        {id: 4, name:'Quicklink 4'},
        {id: 5, name:'Quicklink 5'},
        {id: 6, name:'Quicklink 6'},
        {id: 7, name:'Quicklink 7'},
        {id: 8, name:'Quicklink 8'},
        {id: 9, name:'Quicklink 9'},
        {id: 10, name:'Quicklink 10'},
        {id: 11, name:'Quicklink 11'},
        {id: 12, name:'Quicklink 12'},
        {id: 13, name:'Quicklink 13'},
        {id: 14, name:'Quicklink 14'},
        {id: 15, name:'Quicklink 15'},
        {id: 16, name:'Quicklink 16'},
        {id: 17, name:'Quicklink 17'},
        {id: 18, name:'Quicklink 18'},
        {id: 19, name:'Quicklink 19'},
        {id: 20, name:'Quicklink 20'},
    ];

    additionalInfos = [
        {id: 1, name:'additionalInfo 1'},
        {id: 2, name:'additionalInfo 2'},
        {id: 3, name:'additionalInfo 3'},
    ];

}
