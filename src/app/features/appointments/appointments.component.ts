import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

@Component({
    moduleId: module.id,
    selector: 'ns-appointments',
    templateUrl: 'appointments.component.html'
})
export class AppointmentsComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
    }
}


