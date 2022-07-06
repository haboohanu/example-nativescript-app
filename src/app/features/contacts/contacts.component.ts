import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
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
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.getCourts();
  }

  getCourts() {
    this.contactService.getContacts().subscribe((res) => {
      this.contacts = res;
    });
  }
}
