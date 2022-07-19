import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { DocketDetailsRoutingModule } from './docket-details-routing.module'
import { DocketDetailsComponent } from './docket-details.component'

@NgModule({
  imports: [NativeScriptCommonModule, DocketDetailsRoutingModule, NativeScriptFormsModule, ReactiveFormsModule],
  declarations: [DocketDetailsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class DocketDetailsModule {}
