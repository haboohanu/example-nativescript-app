import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { ProfileEditComponent } from './profile-edit.component'

export const routes: Routes = [
  {
    path: '',
    component: ProfileEditComponent
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class ProfileEditRoutingModule {}
