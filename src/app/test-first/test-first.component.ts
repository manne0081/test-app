import { Component } from '@angular/core';

@Component({
  selector: 'app-test-first',
  templateUrl: './test-first.component.html',
  styleUrls: ['./test-first.component.scss']
})
export class TestFirstComponent {
    objects = [
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
        {name:'object'},
    ];

    // additionalInfos = [
    //     {name:'additionalInfo'},
    //     {name:'additionalInfo'},
    //     {name:'additionalInfo'},
    //     {name:'additionalInfo'},
    // ];
}
