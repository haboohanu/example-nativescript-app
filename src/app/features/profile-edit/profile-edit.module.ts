import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular'
import { ProfileEditRoutingModule } from './profile-edit-routing.module';
import { ProfileEditComponent } from './profile-edit.component';


@NgModule({
  imports: [NativeScriptCommonModule, ProfileEditRoutingModule, ReactiveFormsModule, NativeScriptFormsModule],
  declarations: [ProfileEditComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileEditModule {}
