import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ContactService } from "~/app/core/services/contact.service";

@Component({
  moduleId: module.id,
  selector: "ns-contacts",
  templateUrl: "contacts.component.html",
})
export class ContactsComponent {
  contacts: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private contactService: ContactService,
    private page: Page
    ) {
      page.actionBarHidden = true;
    }

  ngOnInit(): void {

  }

  getContacts() {
    this.contactService.getContacts().subscribe(
      (res) =>{
        console.log(res);

      }

    );
  }
}
