import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { AppointmentsComponent } from './appointments.component'

export const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class AppointmentsRoutingModule {}
