import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { NativeScriptMaterialBottomNavigationBarModule} from "@nativescript-community/ui-material-bottomnavigationbar/angular";

@NgModule({
  imports: [NativeScriptCommonModule, HomeRoutingModule, NativeScriptUISideDrawerModule, NativeScriptMaterialBottomNavigationBarModule,],
  declarations: [HomeComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule {}
