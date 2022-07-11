import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { RegisterRoutingModule } from './register-routing.module'
import { RegisterComponent } from './register.component'

@NgModule({
  imports: [NativeScriptCommonModule, RegisterRoutingModule, NativeScriptFormsModule, ReactiveFormsModule],
  declarations: [RegisterComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class RegisterModule {}
