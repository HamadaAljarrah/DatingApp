import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root'
})
export class BusyService {
    busyRequsetCount = 0;

    constructor(private spinner: NgxSpinnerService) { }

    busy() {
        this.busyRequsetCount++;
        this.spinner.show(undefined, {
            type: "ball-clip-rotate",
            bdColor: "rgba(255,255,255,0)",
            color: "#333"
        });
    }
    idle() {
        this.busyRequsetCount--;
        if(this.busyRequsetCount <= 0){
            this.busyRequsetCount = 0;
            this.spinner.hide();
        }
    }
}
