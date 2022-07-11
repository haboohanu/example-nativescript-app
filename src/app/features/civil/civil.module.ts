import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { CivilRoutingModule } from './civil-routing.module';
import { CivilComponent } from './civil.component';


@NgModule({
  imports: [NativeScriptCommonModule, CivilRoutingModule, NativeScriptDateTimePickerModule],
  declarations: [CivilComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CivilModule {}
