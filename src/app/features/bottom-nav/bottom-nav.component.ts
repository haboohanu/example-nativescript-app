import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {
  TabSelectedEventData,
  TabPressedEventData,
} from "@nativescript-community/ui-material-bottomnavigationbar";

@Component({
  moduleId: module.id,
  selector: "ns-bottom-nav",
  templateUrl: "bottom-nav.component.html",
})
export class BottomNavComponent {
  constructor(private routerExtensions: RouterExtensions) {}

  onBottomNavigationTabSelected(event: TabSelectedEventData) {
    switch (event.newIndex) {
      case 0:
        this.routerExtensions.navigate(["home"]);
        break;
      case 1:
        this.routerExtensions.navigate(["home"]);
        break;
      case 2:
        this.routerExtensions.navigate(["home"]);
        break;
      case 3:
        this.routerExtensions.navigate(["appointments"]);
        break;
      case 4:
        this.routerExtensions.navigate(["profile"]);
        break;
    }
  }
}
