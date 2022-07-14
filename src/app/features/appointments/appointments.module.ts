import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { AppointmentsRoutingModule } from './appointments-routing.module'
import { AppointmentsComponent } from './appointments.component'
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { DropDownModule } from "nativescript-drop-down/angular";

@NgModule({
  imports: [NativeScriptCommonModule, AppointmentsRoutingModule, NativeScriptDateTimePickerModule, DropDownModule],
  declarations: [AppointmentsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppointmentsModule {}
