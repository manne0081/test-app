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
