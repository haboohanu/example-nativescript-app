import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ContactsComponent } from './contacts.component'

export const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class ContactsRoutingModule {}
