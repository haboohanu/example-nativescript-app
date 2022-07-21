import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
  NativeScriptHttpClientModule,
  NativeScriptModule,
} from "@nativescript/angular";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TNSFontIconModule } from "nativescript-ngx-fonticon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BottomNavComponent } from "./features/bottom-nav/bottom-nav.component";
import { docketReducer } from "./features/self-help/state/docket.reducer";

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,
    TNSFontIconModule.forRoot({
      fa: "./assets/css/font-awesome.css",
    }),
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('dockets', docketReducer),
    EffectsModule.forRoot([]),
  ],
  declarations: [AppComponent, BottomNavComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
