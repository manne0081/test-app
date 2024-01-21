import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestFirstComponent } from './test-first/test-first.component';
import { HomeComponent } from './home/home.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { PartnerComponent } from './partner/partner.component';
import { TestSecondComponent } from './test-second/test-second.component';
import { TestThirdComponent } from './test-third/test-third.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientDetailComponent } from './client/client-detail/client-detail.component';
import { PrivateComponent } from './private/private.component';

@NgModule({
    declarations: [
        AppComponent,
        TestFirstComponent,
        HomeComponent,
        PageHeaderComponent,
        LoginComponent,
        DashboardComponent,
        QuicklinksComponent,
        MainNavigationComponent,
        PartnerComponent,
        TestSecondComponent,
        TestThirdComponent,
        EmployeeListComponent,
        EmployeeDetailComponent,
        MainMenuComponent,
        ClientListComponent,
        ClientDetailComponent,
        PrivateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        CookieService,
    ],
    bootstrap: [
        AppComponent,
    ]
})

export class AppModule { }
