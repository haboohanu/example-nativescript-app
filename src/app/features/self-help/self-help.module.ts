import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { SelfHelpRoutingModule } from './self-help-routing.module'
import { SelfHelpComponent } from './self-help.component'

@NgModule({
  imports: [NativeScriptCommonModule, SelfHelpRoutingModule, NativeScriptFormsModule, ReactiveFormsModule],
  declarations: [SelfHelpComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SelfHelpModule {}
