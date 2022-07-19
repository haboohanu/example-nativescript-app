import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NativeScriptDateTimePickerModule } from "@nativescript/datetimepicker/angular";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CivilRoutingModule } from "./civil-routing.module";
import { CivilComponent } from "./civil.component";
//import { CourtEffects } from "./state/court.effects";
import { courtReducer } from "./state/court.reducer";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CivilRoutingModule,
    NativeScriptDateTimePickerModule,
    StoreModule.forFeature('courts', courtReducer),
  ],
  declarations: [CivilComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CivilModule {}
