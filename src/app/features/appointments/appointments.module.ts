import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { AppointmentsRoutingModule } from './appointments-routing.module'
import { AppointmentsComponent } from './appointments.component'

@NgModule({
  imports: [NativeScriptCommonModule, AppointmentsRoutingModule],
  declarations: [AppointmentsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppointmentsModule {}
