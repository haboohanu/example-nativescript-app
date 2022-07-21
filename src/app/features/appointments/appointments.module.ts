import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { AppointmentsRoutingModule } from "./appointments-routing.module";
import { AppointmentsComponent } from "./appointments.component";
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { DropDownModule } from "nativescript-drop-down/angular";
import { StoreModule } from "@ngrx/store";
import { appointmentReducer } from "./state/appointment.reducer";
import { EffectsModule } from "@ngrx/effects";
import { AppointmentEffects } from './state/appointment.effects'

@NgModule({
  imports: [
    NativeScriptCommonModule,
    AppointmentsRoutingModule,
    NativeScriptDateTimePickerModule,
    DropDownModule,
    StoreModule.forFeature('appointments', appointmentReducer),
    EffectsModule.forFeature([AppointmentEffects])
  ],
  declarations: [AppointmentsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppointmentsModule {}
