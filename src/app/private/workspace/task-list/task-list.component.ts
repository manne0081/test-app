import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
    movies = [
        'Episode I - The Phantom Menace',
        'Episode II - Attack of the Clones',
        'Episode III - Revenge of the Sith',
        'Episode IV - A New Hope',
        'Episode V - The Empire Strikes Back',
        'Episode VI - Return of the Jedi',
        'Episode VII - The Force Awakens',
        'Episode VIII - The Last Jedi'
    ];

    isRotated: { [key: string]: boolean } = {};
    dragTransform: string = "";

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    drop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

    startDrag(index: number) {
        console.log("startDrag() called for index:", index);
        this.dragTransform = 'rotate(5deg)';
        this.isRotated = {};
        this.isRotated[index] = true;
    }

    endDrag() {
        this.isRotated = {};
    }

}
