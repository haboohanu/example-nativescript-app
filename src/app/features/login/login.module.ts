import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { LoginRoutingModule } from './login-routing.module'
import { LoginComponent } from './login.component'
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';



@NgModule({
  imports: [NativeScriptCommonModule, LoginRoutingModule, ReactiveFormsModule, NativeScriptFormsModule, TNSCheckBoxModule,],
  declarations: [LoginComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule {}
