import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MemeberListComponent } from './members/memeber-list/memeber-list.component';
import { MemeberDetailComponent } from './members/memeber-detail/memeber-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { JwtInterceptor } from './_interceptor/jwt.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        RegisterComponent,
        MemeberListComponent,
        MemeberDetailComponent,
        ListsComponent,
        MessagesComponent,
        ErrorComponent,
        NotFoundComponent,
        ServerErrorComponent,
        MemberCardComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule

    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
