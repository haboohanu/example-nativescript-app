import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { AppointmentsRoutingModule } from './appointments-routing.module'
import { AppointmentsComponent } from './appointments.component'
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";


@NgModule({
  imports: [NativeScriptCommonModule, AppointmentsRoutingModule, NativeScriptDateTimePickerModule],
  declarations: [AppointmentsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppointmentsModule {}
