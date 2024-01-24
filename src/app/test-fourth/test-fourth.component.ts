import { Component } from '@angular/core';

@Component({
    selector: 'app-test-fourth',
    templateUrl: './test-fourth.component.html',
    styleUrls: ['./test-fourth.component.scss']
})

export class TestFourthComponent {
    isUserAdmin: boolean = true;










    testSetUserIsAdmin(): void {
        this.isUserAdmin = !this.isUserAdmin;
    }
}
