import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-profile",
  templateUrl: "terms.component.html",
})
export class TermsComponent {
  constructor(
    private page: Page
  ) {
    page.actionBarHidden = true;
  }


  ngOnInit(): void {
  }


}
