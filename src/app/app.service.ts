import { Injectable } from '@angular/core';
import { Mockdata } from './app.mock';

@Injectable({
  	providedIn: 'root'
})

export class AppService {
    localHost: string = '';
    isLocalhost: boolean = true;

    constructor(private appMockdata: Mockdata) {
    }

    getLocalHost(): string {
        return this.localHost;
    }

    getIsLocal(): boolean {
        return this.isLocalhost;
    }

    setIsLocalhost(): void {
        let hostName: string = window.location.hostname;

        if (hostName == 'localhost') {
            this.isLocalhost = true;
        } else {
            this.isLocalhost = false;
        }
    }

    setLocalHost(): void {
        this.localHost = window.location.hostname;
    }

    getEmployees() {
        return this.appMockdata.getEmployees();
    }
}
