import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { ContactsRoutingModule } from './contacts-routing.module'
import { ContactsComponent } from './contacts.component'

@NgModule({
  imports: [NativeScriptCommonModule, ContactsRoutingModule],
  declarations: [ContactsComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContactsModule {}
