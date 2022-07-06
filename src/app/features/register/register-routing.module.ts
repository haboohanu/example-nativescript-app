import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'
import { RegisterComponent } from './register.component'

export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent
  }
]

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)]
})
export class RegisterRoutingModule {}
