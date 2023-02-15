import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
    title = 'client';
    users: any;
    constructor(private accountServices: AccountService, private spinner: NgxSpinnerService) {

    }

    ngOnInit(): void {
        this.setCurrentUser();
    }



    setCurrentUser() {
        const userString = localStorage.getItem("user");
        if (!userString) return;
        const user: User = JSON.parse(userString);
        this.accountServices.setCurrentUser(user);
    }
}
