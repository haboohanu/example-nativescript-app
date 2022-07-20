import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {
  TabSelectedEventData,
  TabPressedEventData,
} from "@nativescript-community/ui-material-bottomnavigationbar";
import { Store } from "@ngrx/store";
import { State, getCurrentDocket } from "../self-help/state/docket.reducer";
import { DocketModel } from "~/app/core/models/docket.model";

@Component({
  moduleId: module.id,
  selector: "ns-bottom-nav",
  templateUrl: "bottom-nav.component.html",
})
export class BottomNavComponent {

  currentDocket: DocketModel | null = null;

  constructor(
    private routerExtensions: RouterExtensions,
    private store: Store<State>
  ) {}

  ngOnInit(): void {
  }

  onBottomNavigationTabSelected(event: TabSelectedEventData) {
    this.getCurrentDocket();

    switch (event.newIndex) {
      case 0:
        this.routerExtensions.navigate(["home"]);
        break;
      case 1:
        if(this.currentDocket!=null){
          this.routerExtensions.navigate(["docketdetails", this.currentDocket.id]);
        }
        else{
          this.routerExtensions.navigate(["selfhelp"]);
        }
        break;
      case 2:
        this.routerExtensions.navigate(["civil"]);
        break;
      case 3:
        this.routerExtensions.navigate(["appointments"]);
        break;
      case 4:
        this.routerExtensions.navigate(["profile"]);
        break;
    }
  }

  getCurrentDocket(){
    this.store
    .select(getCurrentDocket)
    .subscribe((currentDocket) => (this.currentDocket = currentDocket));
    console.log("CURRENT DOCKET:", this.currentDocket);
  }

}
