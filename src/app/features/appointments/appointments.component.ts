import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { alert, Page } from "@nativescript/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { CourtModel } from "~/app/core/models/court.model";
import { ContactModel } from "~/app/core/models/contact.model";
import { AppointmentModel } from "~/app/core/models/appointment.model";
import { CourtService } from "~/app/core/services/court.service";
import { ValueList, ValueItem } from "nativescript-drop-down";
import { Store } from "@ngrx/store";
import {
  getShowAppointmentsList,
  State,
} from "../appointments/state/appointment.reducer";
import * as AppointmentActions from "./state/appointment.actions";
import { ContactService } from "~/app/core/services/contact.service";

@Component({
  moduleId: module.id,
  selector: "ns-appointments",
  templateUrl: "appointments.component.html",
})
export class AppointmentsComponent {
  selectedCourtIndex: number;
  selectedContactIndex: number;
  items: Array<string>;
  selectedDate: Date;
  selectedTime: Date;
  selectedCourt: CourtModel;
  selectedContact: ContactModel;
  courts: CourtModel[] = [];
  courtItemSource: ValueList<CourtModel>;
  courtItems: ValueItem<CourtModel>[] = [];

  contacts: ContactModel[] = [];
  contactItemSource: ValueList<ContactModel>;
  contactItems: ValueItem<ContactModel>[] = [];

  appointments: AppointmentModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private courtService: CourtService,
    private contactService: ContactService,
    private store: Store<State>
  ) {
    //page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getCourts();
    this.getContacts();
    this.getShowAppointmentsList();
  }

  getCourts() {
    this.courtService.getCourts().subscribe((res) => {
      for (let c of res.results) {
        let _court: CourtModel = {
          id: c.id,
          courtName: c.full_name,
          url: c.url,
          jurisdiction: c.jurisdiction,
        };
        let item: ValueItem<CourtModel> = {
          value: _court,
          display: _court.courtName,
        };
        this.courtItems.push(item);
      }
      this.courtItemSource = new ValueList<CourtModel>(this.courtItems);
    });
  }

  getContacts() {
    this.contactService.getContacts().subscribe((res) => {
      for (let c of res.results) {
        let _contact: ContactModel = {
          name: `${c.name.title} ${c.name.first} ${c.name.last}`,
          email: c.email,
          phone: c.phone,
        };
        let item: ValueItem<ContactModel> = {
          value: _contact,
          display: _contact.name,
        };
        this.contactItems.push(item);
      }
      this.contactItemSource = new ValueList<ContactModel>(this.contactItems);
    });
  }

  public onCourtChange(args: SelectedIndexChangedEventData) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
    console.log(
      "selected value:",
      this.courtItemSource.getValue(args.newIndex)
    );
    this.selectedCourt = this.courtItemSource.getValue(args.newIndex);
  }

  public onContactChange(args: SelectedIndexChangedEventData) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
    console.log(
      "selected value:",
      this.contactItemSource.getValue(args.newIndex)
    );
    this.selectedContact = this.contactItemSource.getValue(args.newIndex);
  }

  getFormattedDate(date: Date): string {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return m + "/" + (d < 10 ? "0" : "") + d + "/" + y;
  }

  getFormattedTime(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    let pm = false;
    if (h >= 12) {
      pm = true;
    }
    return (
      (h < 10 ? "0" : "") +
      (h <= 12 ? h : h - 12) +
      ":" +
      (m < 10 ? "0" : "") +
      m +
      (pm == true ? "PM" : "AM")
    );
  }

  onSave() {
    console.log(this.getFormattedDate(this.selectedDate));
    console.log(this.getFormattedTime(this.selectedTime));
    console.log(this.selectedTime);
    console.log(this.selectedTime);
    let options = {
      title: "Appointment Made",
      message: `Appointment Made for
      \n${this.selectedCourt.courtName}
      \n${this.selectedContact.name}
      \n${this.getFormattedDate(this.selectedDate)}
      \n${this.getFormattedTime(this.selectedTime)}`,
      okButtonText: "OK",
    };

    alert(options).then(() => {
      console.log("Appointment made!");
    });

    let _appointment: AppointmentModel = {
      court: this.selectedCourt,
      judge: this.selectedContact,
      date: this.selectedDate,
      time: this.selectedTime,

    };
    console.log(this.appointments);
    this.addToAppointmentList(_appointment);
  }

  compareAppointmentDateTime(a: AppointmentModel, b: AppointmentModel) {
    if (a.date > b.date) {
      return 1;
    } else if (a.date < b.date) {
      return -1;
    } else {
      if (a.time > b.time) {
        return 1;
      } else {
        return -1;
      }
    }
  }

  getShowAppointmentsList() {
    this.store
      .select(getShowAppointmentsList)
      .subscribe((appointments) => (this.appointments = appointments));
  }

  addToAppointmentList(appointment: AppointmentModel) {
    this.store.dispatch(
      AppointmentActions.addToAppointmentList({ appointment })
    );
  }
}
