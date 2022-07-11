import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'details/:id',
    loadChildren: () =>
      import('./features/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'appointments',
    loadChildren: () => import('./features/appointments/appointments.module').then(m => m.AppointmentsModule)
  },
  {
    path: 'civil',
    loadChildren: () => import('./features/civil/civil.module').then(m => m.CivilModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./features/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'profile/edit',
    loadChildren: () =>
      import('./features/profile-edit/profile-edit.module').then(m => m.ProfileEditModule)
  },
  {
    path: 'selfhelp',
    loadChildren: () => import('./features/self-help/self-help.module').then(m => m.SelfHelpModule)
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
