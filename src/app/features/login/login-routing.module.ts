import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { LoginComponent } from './login.component'

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class LoginRoutingModule {}
