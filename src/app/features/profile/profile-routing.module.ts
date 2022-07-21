import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ProfileComponent } from './profile.component'
import { TermsComponent } from './terms/terms.component'

export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class ProfileRoutingModule {}
