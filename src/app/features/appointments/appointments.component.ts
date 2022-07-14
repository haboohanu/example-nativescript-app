import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { DatePicker, EventData, Page, TimePicker } from "@nativescript/core";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { CourtModel } from "~/app/core/models/court.model";
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
  courts: CourtModel[] = [];
  courtItems: ValueItem<CourtModel>[] = [];

  public itemSource: ValueList<CourtModel>;

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
    page.actionBarHidden = true;
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
    return (m < 10 ? "0" : "") + m + "." + (d < 10 ? "0" : "") + d + "." + y;
  }

  getFormattedTime(date: Date): string {
    const h = date.getHours();
    const m = date.getMinutes();
    return (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
  }

  onSave() {
    console.log(this.getFormattedDate(this.selectedDate));
    console.log(this.getFormattedTime(this.selectedTime));
  }
}
