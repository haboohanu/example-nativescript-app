import { AfterViewInit, ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { FlickService } from "~/app/core/services/flick.service";
import { RouterExtensions } from "@nativescript/angular";
import { isAndroid, isIOS, ItemEventData } from "@nativescript/core";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { TabSelectedEventData, TabPressedEventData } from "@nativescript-community/ui-material-bottomnavigationbar";
import { AuthService } from "~/app/core/services/auth.service";

@Component({
  moduleId: module.id,
  selector: "ns-home",
  templateUrl: "home.component.html",
})
export class HomeComponent implements AfterViewInit {
  flicks = this.flickService.getFlicks();

  constructor(
    private flickService: FlickService,
    private routerExtensions: RouterExtensions,
    private _changeDetectionRef: ChangeDetectorRef,
    private authService: AuthService

  ) {}

  @ViewChild(RadSideDrawerComponent, { static: false })
  public drawerComponent: RadSideDrawerComponent;
  public drawer: RadSideDrawer;
  drawerIsOpen = false;



  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  onFlickTap(args: ItemEventData): void {
    this.routerExtensions.navigate(["details", this.flicks[args.index].id]);
  }

  isIOS(): boolean {
    return isIOS;
  }

  isAndroid(): boolean {
    return isAndroid;
  }

  isOpen(){
    let self = this;
    return self.drawer.isCollapsed
  }


  onLogout() {
    this.authService.setLoggedIn(false);
    this.routerExtensions.navigate(["login"]);
  }

  onBottomNavigationTabSelected(event: TabSelectedEventData){
    console.log(event.newIndex);
    switch(event.newIndex){
      case 0:
        this.routerExtensions.navigate(["home"]);
        break;
      case 1:
        this.routerExtensions.navigate(["login"]);
        break;
    }
  }


  onBottomNavigationTabPressed(event: TabPressedEventData){
    console.log(event.index);
  }

  public openDrawer() {
    if(!this.drawer.getIsOpen()){
      console.log('true')
    }
    this.drawerIsOpen = true;
    console.log("Show SideDrawer tapped.");
    this.drawer.showDrawer();
  }

public onCloseDrawerTap() {
  if(this.isOpen()){
    console.log('true')
  }
  this.drawerIsOpen = false;
  console.log("Close SideDrawer tapped.");
    this.drawer.closeDrawer();
  }

  onClosed(){
    this.drawerIsOpen = false;
  }

}
