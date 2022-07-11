import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { SelfHelpComponent } from './self-help.component'

export const routes: Routes = [
  {
    path: '',
    component: SelfHelpComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class SelfHelpRoutingModule {}
