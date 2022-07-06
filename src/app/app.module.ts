import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BottomNavComponent } from './features/bottom-nav/bottom-nav.component'


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptHttpClientModule],
  declarations: [AppComponent, BottomNavComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
