import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { DocketDetailsComponent } from './docket-details.component'

export const routes: Routes = [
  {
    path: '',
    component: DocketDetailsComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class DocketDetailsRoutingModule {}
