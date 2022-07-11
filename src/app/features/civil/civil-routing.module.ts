import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { CivilComponent } from './civil.component'

export const routes: Routes = [
  {
    path: '',
    component: CivilComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class CivilRoutingModule {}
