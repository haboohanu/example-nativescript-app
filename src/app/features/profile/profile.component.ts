import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

@Component({
    moduleId: module.id,
    selector: 'ns-profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    constructor(
        private activatedRoute: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
    }
}

