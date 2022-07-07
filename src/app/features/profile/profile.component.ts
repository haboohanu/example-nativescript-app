import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-profile",
  templateUrl: "profile.component.html",
})
export class ProfileComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page
  ) {
    page.actionBarHidden = true;
  }

  ngOnInit(): void {}


  onTapSettings(event){

  }

}
