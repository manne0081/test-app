import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Partner } from './partners';
import { PartnerService } from './partner.service';

@Component({
    selector: 'app-partner',
    templateUrl: './partner.component.html',
    styleUrls: ['./partner.component.scss']
})

export class PartnerComponent implements OnInit{
    partners: Partner[] = [];

    additionalInfos = [
        {name:'additionalInfo'},
        {name:'additionalInfo'},
        {name:'additionalInfo'},
        {name:'additionalInfo'},
    ];

    constructor(
        private router: Router,
		// private headerService: HeaderService,
		private partnerService: PartnerService,
	) { }

    ngOnInit(): void {
		this.getPartners();
	}

    getPartners(): void {
		// TeamMembers-Array
		// -----------------
		// this.teamMembers = this.teamMemberService.getTeamMembers1();

		// TeamMembers-Observable
		// ----------------------
		this.partnerService.getPartners()
			.subscribe(partners => this.partners = partners);
	}

	onClick(partner: Partner): void {
		const teamMemberId = partner ? partner.id : null;
		this.router.navigate(['partner', partner.id]);
	}
}
