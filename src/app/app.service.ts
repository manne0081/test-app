import { Injectable } from '@angular/core';

@Injectable({
  	providedIn: 'root'
})

export class AppService {
    isLocalhost: boolean = true;

    getIsLocal(): boolean {
        return this.isLocalhost;
    }

    setIsLocalhost(): void {
        let hostName: string = window.location.hostname;
        let isLocalHost: boolean = true;

        if (hostName == 'localhost') {
            isLocalHost = true;
        } else {
            isLocalHost = false;
        }
    }
}
