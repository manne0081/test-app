import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Partner } from './partners';
import { PARTNERS } from './partners-mock';

@Injectable({
    providedIn: 'root'
})

export class PartnerService {

    constructor() {
    }

    // Returns partners-array as observable
	// --------------------------------------
	getPartners(): Observable<Partner[]> {
		const partners = of(PARTNERS);
		return partners;
	}

    // Returns partner as observable
	// --------------------------------------
	getPartner(id: number): Observable<Partner> {
		const partner = PARTNERS.find(h => h.id === id)!;
		return of(partner);
	}
}
