import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerComponent } from './partner/partner.component';
import { TestFirstComponent } from './test-first/test-first.component';
import { TestSecondComponent } from './test-second/test-second.component';
import { TestThirdComponent } from './test-third/test-third.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { PrivateComponent } from './private/private.component';
import { TestFourthComponent } from './test-fourth/test-fourth.component';
import { TestContent1Component } from './test-content1/test-content1.component';
import { TaskListComponent } from './private/workspace/task-list/task-list.component';
import { CampagneListComponent } from './private/workspace/campagne-list/campagne-list.component';
import { CompanyListComponent } from './private/contact/company-list/company-list.component';
import { SupplierListComponent } from './private/contact/supplier-list/supplier-list.component';
import { OrderListComponent } from './private/operations/order-list/order-list.component';
import { InvoiceListComponent } from './private/operations/invoice-list/invoice-list.component';

const routes: Routes = [
    { path: '',   redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    // RELAXX - Private Navigation
    // ***************************
    { path: 'private', component: PrivateComponent,
        children: [
            // dashboard (as Dashboard)
            // ------------------------
            { path: 'dashboard', component: DashboardComponent },

            // workspace (as Workspace)
            // ------------------------
            { path: 'task', component: TaskListComponent },                     // (as Aufgaben)
            { path: 'planner', component: TaskListComponent },                  // (as Planner)
            { path: 'campagne', component: CampagneListComponent },             // (as Kampagnen)
            { path: 'email', component: TaskListComponent },                    // (as E-Mail)

            // contact (as Kontakte)
            // ---------------------
            { path: 'company', component: CompanyListComponent },               // (as Unternehmen)
            { path: 'supplier', component: SupplierListComponent },             // (as Lieferanten)
            { path: 'contact', component: CompanyListComponent },               // (as Ansprechpartner)
            { path: 'user', component: CompanyListComponent },                  // (as Benutzer)
            { path: 'module-auth', component: CompanyListComponent },           // (as Modulberechtigungen)
            { path: 'company-wiki', component: CompanyListComponent },          // (as Unternehmenswikis)
            { path: 'debitor-data', component: CompanyListComponent },          // (as Debitor Daten)
            { path: 'address', component: CompanyListComponent },               // (as Adressen)

            // operations (as Vorgänge & Belege)
            // ---------------------------------
            { path: 'sales-transaction', component: CompanyListComponent },     // (as Adressen)
            { path: 'offer', component: CompanyListComponent },                 // (as Angebote)
            { path: 'order', component: OrderListComponent },                   // (as Aufträge)
            { path: 'invoice', component: InvoiceListComponent },               // (as Rechnungen)
            { path: 'partial-order', component: CompanyListComponent },         // (as Teilaufträge)
            { path: 'document', component: CompanyListComponent },              // (as Alle Belege)

            // orderProcessing (as Auftragsabwicklung)
            // ---------------------------------------
            { path: 'multiposting', component: CompanyListComponent },          // (as Multipostings)
            { path: 'posting', component: CompanyListComponent },               // (as Postings)
            { path: 'advertisements', component: CompanyListComponent },        // (as Stellenanzeigen)
            { path: 'print', component: CompanyListComponent },                 // (as Print)
            { path: 'service', component: CompanyListComponent },               // (as Dienstleistungen & Sonstiges)

            // accounting (as Rechnungswesen)
            // ------------------------------
            { path: 'invoice-out', component: CompanyListComponent },           // (as Ausgangsrechungen)
            { path: 'inv-position-group', component: CompanyListComponent },    // (as Rechnungspositionsgruppen)
            { path: 'order-position', component: CompanyListComponent },        // (as Auftragspositionen)
            { path: 'documents-pdf', component: CompanyListComponent },         // (as Belegs-PDFs)
            { path: 'invoice-in', component: CompanyListComponent },            // (as Eingangsrechnungen)

            // productManagement (as Produktverwaltung)
            // ----------------------------------------
            { path: 'product', component: CompanyListComponent },               // (as Produkte)
            { path: 'product-variant', component: CompanyListComponent },       // (as Produktvarianten)
            { path: 'product-group', component: CompanyListComponent },         // (as Produktgruppen)
            { path: 'product-group-variant', component: CompanyListComponent }, // (as PGV-Gruppen)
            { path: 'position-template', component: CompanyListComponent },     // (as Positionsvorlagen)
            { path: 'trans-path', component: CompanyListComponent },            // (as Übertragungswege)
            { path: 'additional-data', component: CompanyListComponent },       // (as Zusatzangaben)

            // Vertragswesen (as contracting)
            // ------------------------------
            { path: 'customer-contract', component: CompanyListComponent },     // (as Kundenverträge)
            { path: 'supplier-contract', component: CompanyListComponent },     // (as Lieferantenverträge)
            { path: 'partner-config', component: CompanyListComponent },        // (as Partner-Konfiguration)

            // toolsAssets (as Tools & Assets)
            // -------------------------------
            { path: 'smart-template', component: CompanyListComponent },        // (as Smart-Template)
            { path: 'job-form', component: CompanyListComponent },              // (as Bewerbungsformulare)
            { path: 'interface', component: CompanyListComponent },             // (as Schnittstellen)
            { path: 'global-font', component: CompanyListComponent },           // (as Global-Fonts)

            // statisticsReporting (as Statistik & Reporting)
            // ----------------------------------------------
            { path: 'sales-statistic', component: CompanyListComponent },       // (as Umsatzstatistik)
            { path: 'team-statistic', component: CompanyListComponent },        // (as Teamstatistik)
            { path: 'kpi-report', component: CompanyListComponent },            // (as KPI-Report)
            { path: 'click-report', component: CompanyListComponent },          // (as Klick-Report)
        ]
    },

    // Navigation TEST-PAGES
    // *********************
    { path: 'partner', component: PartnerComponent },
    { path: 'test3', component: TestThirdComponent },
    { path: 'test4', component: TestFourthComponent },
    { path: 'employees', title: "Employee Overview", component: EmployeeListComponent },
    { path: 'clients', title: "Client Overview", component: ClientListComponent },

    { path: '**', component: AppComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    // imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
