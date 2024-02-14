import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
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

    additionalInfos = [
        {name:'additionalInfo'},
        {name:'additionalInfo'},
        {name:'additionalInfo'},
        {name:'additionalInfo'},
    ];

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}



    // DRAG AND DROP - TESTING
    // ***********************
    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
    ];

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
