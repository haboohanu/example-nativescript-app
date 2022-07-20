import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
} from "@nativescript/angular";
import { StoreModule } from "@ngrx/store";
import { SelfHelpRoutingModule } from "./self-help-routing.module";
import { SelfHelpComponent } from "./self-help.component";
import { docketReducer } from "./state/docket.reducer"
@NgModule({
  imports: [
    NativeScriptCommonModule,
    SelfHelpRoutingModule,
    NativeScriptFormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('dockets', docketReducer),
  ],
  declarations: [SelfHelpComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SelfHelpModule {}
