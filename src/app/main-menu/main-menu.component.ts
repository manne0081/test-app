import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})

export class MainMenuComponent implements OnInit {
    @Output() selectionChanged: EventEmitter<string> = new EventEmitter<string>();

    classFavorite: string ="";
    classDashboard: string ="";
    classWorkspace: string ="";
    classContacts: string ="";
    classOperations: string ="";
    classOrderProcessing: string ="";
    classAccounting: string ="";
    classProductManagement: string ="";
    classContracting: string ="";
    classToolsAssets: string ="";
    classStatisticsReporting: string ="";
    classPlaceholder: string ="";

    menuItems: { name: string, class: string, url: string, favorite: boolean } [] = [
        // Dashboard
        // *********
        { name: "Dashboard", class: "/private/dashboard", url: "/private/dashbaord", favorite: false },

        // Workspace
        // *********
        { name: "Aufgaben", class: "/private/workspace", url: "/private/task", favorite: true },
        { name: "Planner", class: "/private/workspace", url: "/private/planner", favorite: false },
        { name: "Kampagnen", class: "/private/workspace", url: "/private/campagne", favorite: false },
        { name: "E-Mail", class: "/private/workspace", url: "/private/email", favorite: false },

        // Contact (as Kontakte)
        // *********************
        { name: "Unternehmen", class: "/private/contact", url: "/private/company", favorite: true },
        { name: "Lieferanten", class: "/private/contact", url: "/private/supplier", favorite: false },
        { name: "Ansprechpartner", class: "/private/contact", url: "/private/contact", favorite: false },
        { name: "Benutzer", class: "/private/contact", url: "/private/user", favorite: false },
        { name: "Modulberechtigungen", class: "/private/contact", url: "/private/module-auth", favorite: false },
        { name: "Unternehmenswiki", class: "/private/contact", url: "/private/company-wiki", favorite: false },
        { name: "Debitor Daten", class: "/private/contact", url: "/private/debitor-data", favorite: false },
        { name: "Adressen", class: "/private/contact", url: "/private/address", favorite: false },

        // operations (as Vorgänge & Belege)
        // *********************************
        { name: "Verkaufsvorgänge", class: "/private/operations", url: "/private/sales-transaction", favorite: true },
        { name: "Angebote", class: "/private/operations", url: "/private/offer", favorite: true },
        { name: "Aufträge", class: "/private/operations", url: "/private/order", favorite: true },
        { name: "Rechnungen", class: "/private/operations", url: "/private/invoice", favorite: true },
        { name: "Teilaufträge", class: "/private/operations", url: "/private/partial-order", favorite: true },
        { name: "Alle Belege", class: "/private/operations", url: "/private/document", favorite: true },

        // orderProcessing (as Auftragsabwicklung)
        // ***************************************
        { name: "Multipostings", class: "/private/orderProcessing", url: "/private/multiposting", favorite: false },
        { name: "Postings", class: "/private/orderProcessing", url: "/private/posting", favorite: false },
        { name: "Stellenanzeigen", class: "/private/orderProcessing", url: "/private/advertisements", favorite: false },
        { name: "Print", class: "/private/orderProcessing", url: "/private/print", favorite: false },
        { name: "Dienstleistungen & Sonstiges", class: "/private/orderProcessing", url: "/private/service", favorite: false },

        // accounting (as Rechnungswesen)
        // ******************************
        { name: "Ausgangsrechungen", class: "/private/accounting", url: "/private/invoice-out", favorite: false },


        // productManagement (as Produktverwaltung)
        // ****************************************
        { name: "Produkte", class: "/private/productManagement", url: "/private/product", favorite: false },


        // Vertragswesen (as contracting)
        // ******************************
        { name: "Kundenverträge", class: "/private/contracting", url: "/private/customer-contract", favorite: false },


        // toolsAssets (as Tools & Assets)
        // *******************************
        { name: "Smart-Template", class: "/private/toolsAssets", url: "/private/smart-template", favorite: false },


        // statisticsReporting (as Statistik & Reporting)
        // **********************************************
        { name: "Umsatzstatistik", class: "/private/statisticsReporting", url: "/private/sales-statistic", favorite: false },

    ];

    constructor (private router: Router) {
    }

    ngOnInit(): void {
        this.setItemClass("/private/dashboard");
        this.onSelectionChange('Dashboard');
    }

    onSelectionChange(selectedValue: string): void {
        this.selectionChanged.emit(selectedValue);
    }

    setItemClass(url: string): void {
        if (url == "/private/dashboard") {
            this.classFavorite = "pre-active";
            this.classDashboard = "active";
            this.classWorkspace = "post-active";
            this.classContacts = "";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/workspace") {
            this.classFavorite = "";
            this.classDashboard = "pre-active";
            this.classWorkspace = "active";
            this.classContacts = "post-active";
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/contact") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = "pre-active"
            this.classContacts = "active"
            this.classOperations = "post-active";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/operations") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = "pre-active"
            this.classOperations = "active";
            this.classOrderProcessing = "post-active";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/orderProcessing") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "pre-active";
            this.classOrderProcessing = "active";
            this.classAccounting = "post-active";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/accounting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "pre-active";
            this.classAccounting = "active";
            this.classProductManagement = "post-active";
            this.classContracting = "";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/productManagement") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "pre-active";
            this.classProductManagement = "active";
            this.classContracting = "post-active";
            this.classToolsAssets = "";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/contracting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "pre-active";
            this.classContracting = "active";
            this.classToolsAssets = "post-active";
            this.classStatisticsReporting = "";
            this.classPlaceholder = "";
        };
        if (url == "/private/toolsAssets") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "pre-active";
            this.classToolsAssets = "active";
            this.classStatisticsReporting = "post-active";
            this.classPlaceholder = "";
        };
        if (url == "/private/statisticsReporting") {
            this.classFavorite = "";
            this.classDashboard = "";
            this.classWorkspace = ""
            this.classContacts = ""
            this.classOperations = "";
            this.classOrderProcessing = "";
            this.classAccounting = "";
            this.classProductManagement = "";
            this.classContracting = "";
            this.classToolsAssets = "pre-active";
            this.classStatisticsReporting = "active";
            this.classPlaceholder = "post-active";
        };
    }

    toggleFavorite(item: any) {
        item.favorite = !item.favorite;
    }

}
