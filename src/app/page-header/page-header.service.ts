import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class PageHeaderService {
    isHeaderPrivate: boolean = false;

    constructor() {
    }

    setHeaderIsPrivate(isPrivate: boolean): void {
		this.isHeaderPrivate = isPrivate;
        // console.log("pageHeaderService -> setHeaderIsPrivate: " + isPrivate);
	}

    getHeaderIsPrivate(): Observable<boolean> {
		const isHeaderPrivate = this.isHeaderPrivate;
		// console.log("pageHeaderService -> getHeaderIsPrivate: " + isHeaderPrivate);
		return of(isHeaderPrivate);
	}

}
