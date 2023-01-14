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
import { MemeberListComponent } from './member-list/memeber-list/memeber-list.component';
import { MemeberDetailComponent } from './member-list/memeber-detail/memeber-detail.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';
import { ErrorInterceptor } from './_interceptor/error.interceptor';
import { ErrorComponent } from './error/error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

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
        ServerErrorComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SharedModule

    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
