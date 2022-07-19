import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { alert, DatePicker, EventData, Page, TimePicker } from "@nativescript/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { CourtModel } from "~/app/core/models/court.model";
import { AppointmentModel } from "~/app/core/models/appointment.model";
import { CourtService } from "~/app/core/services/court.service";
import { ValueList, ValueItem, DropDown } from "nativescript-drop-down";
import {
  DatePickerFieldDirective,
  TimePickerFieldDirective,
} from "@nativescript/datetimepicker/angular";

@Component({
  moduleId: module.id,
  selector: "ns-appointments",
  templateUrl: "appointments.component.html",
})
export class AppointmentsComponent {
  public selectedIndex: number;
  public items: Array<string>;
  selectedDate: Date;
  selectedTime: Date;
  selectedCourt: CourtModel;
  courts: CourtModel[] = [];
  itemSource: ValueList<CourtModel>;
  courtItems: ValueItem<CourtModel>[] = [];

  appointments: AppointmentModel[] = [];

  iitemSource = new ValueList<string>([
    { value: "FL", display: "Florida" },
    { value: "MI", display: "Michigan" },
  ]);

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private courtService: CourtService
  ) {
    //page.actionBarHidden = true;
    this.items = [];
    for (var i = 0; i < 5; i++) {
      this.items.push("data item " + i);
    }
  }

  ngOnInit(): void {
    this.getCourts();
  }

  getCourts() {
    this.courtService.getCourts().subscribe((res) => {
      let dd = this.page.getViewById<DropDown>("dd");
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
      console.log("COURITEMS", this.courtItems);
      this.itemSource = new ValueList<CourtModel>(this.courtItems);
      console.log("ITEMSOURCE", this.itemSource);
      //dd.items= itemSource;
    });
  }

  onPickDate(args: EventData) {}

  onPickTime(args: EventData) {}

  minDate: Date = new Date(1975, 0, 29);
  maxDate: Date = new Date(2045, 4, 12);

  onDatePickerLoaded(args) {
    // const datePicker = args.object as DatePicker;
  }

  onDateChanged(args) {
    console.log("Date New value: " + args.value);
    console.log("Date value: " + args.oldValue);
  }

  onDayChanged(args) {
    console.log("Day New value: " + args.value);
    console.log("Day Old value: " + args.oldValue);
  }

  onMonthChanged(args) {
    console.log("Month New value: " + args.value);
    console.log("Month Old value: " + args.oldValue);
  }

  onYearChanged(args) {
    console.log("Year New value: " + args.value);
    console.log("Year Old value: " + args.oldValue);
  }

  public onchange(args: SelectedIndexChangedEventData) {
    console.log(
      `Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`
    );
    console.log("selected value:", this.itemSource.getValue(args.newIndex));
    this.selectedCourt = this.itemSource.getValue(args.newIndex);
  }

  public onopen() {
    console.log("Drop Down opened.");
  }

  public onclose() {
    console.log("Drop Down closed.");
  }

  getFormattedDate(date: Date): string {
    const d = date.getDate();
    const m = date.getMonth() + 1;
    const y = date.getFullYear();
    return (m < 10 ? "0" : "") + m + "/" + (d < 10 ? "0" : "") + d + "/" + y;
  }

  getFormattedTime(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    let pm = false;
    if(h >= 12){
      pm = true;
    }
    return (h < 10 ? "0" : "") + (h <= 12 ? h : h - 12) + ":" + (m < 10 ? "0" : "") + m + (pm == true ? "PM" : "AM");
    //return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m + (pm == true ? "PM" : "AM");
  }

  onSave() {
    console.log(this.getFormattedDate(this.selectedDate));
    console.log(this.getFormattedTime(this.selectedTime));
    console.log(this.selectedTime)
    console.log(this.selectedTime)
    let options = {
      title: "Appointment Made",
      message: `Appointment Made for \n${this.selectedCourt.courtName} \n${this.getFormattedDate(this.selectedDate)} \n${this.getFormattedTime(this.selectedTime)}`,
      okButtonText: "OK",
    };

    alert(options).then(() => {
      console.log("Appointment made!");
      console.log(typeof(42.1))
    });

    let _appointment: AppointmentModel = {
      courtName: this.selectedCourt.courtName,
      date: this.selectedDate,
      time: this.selectedTime
    };

    this.appointments.push(_appointment);
    this.appointments.sort(this.compareAppointmentDateTime);
  }

  compareAppointmentDateTime(a: AppointmentModel, b: AppointmentModel){
    if(a.date > b.date){
      return 1
    }
    else if(a.date < b.date){
      return -1
    }
    else{
      if(a.time > b.time){
        return 1
      }
      else{
        return -1
      }
    }
  }
}
