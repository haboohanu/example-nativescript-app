import { Component } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProfileService } from "~/app/core/services/profile.service";
import { ProfileModel } from "~/app/core/models/profile.model";
import { AuthService } from "~/app/core/services/auth.service";

const arrow = "~/app/assets/chevron.png";

const items = new Array<any>(
  { name: "fill", color: "#f5f5f5" },
  { name: "Search History", arrow: arrow, color: "white" },
  { name: "Appointment History", arrow: arrow, color: "white" },
  { name: "Payment History", arrow: arrow, color: "white" },
  { name: "fill", color: "#f5f5f5" },
  { name: "Terms & Conditions", arrow: arrow, color: "white" },
  { name: "Help", arrow: arrow, color: "white" },
  { name: "Privacy Policy", arrow: arrow, color: "white" },
  { name: "fill", color: "#f5f5f5" },
  { name: "Sign Out", arrow: arrow, color: "white", event: "onSignOut" },
  { name: "fill", color: "#f5f5f5" }
);

@Component({
  moduleId: module.id,
  selector: "ns-profile",
  templateUrl: "profile.component.html",
})
export class ProfileComponent {
  constructor(
    private routerExtensions: RouterExtensions,
    private page: Page,
    private profileService: ProfileService,
    private authService: AuthService
  ) {
    page.actionBarHidden = true;
  }

  userProfile: ProfileModel | undefined = undefined;
  items = items;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe((res) => {
      let profile: ProfileModel = {
        name: `${res.results[0].name.first} ${res.results[0].name.last}`,
        email: res.results[0].email,
        avatar: res.results[0].picture.large,
        username: res.results[0].login.username,
        phone: res.results[0].phone,
        address: `${res.results[0].location.street.number} ${res.results[0].location.street.name}`,
        city: res.results[0].location.city,
        state: res.results[0].location.state,
        country: res.results[0].location.country,
        zipcode: res.results[0].location.postcode,
      };
      this.userProfile = profile;
    });
  }

  onTapSettings(event) {
    console.log("tapped");
  }

  onTapEdit() {
    console.log(this.userProfile);
    this.routerExtensions.navigate(["profile/edit"], {
      queryParams: {
        'name': this.userProfile.name,
        'email': this.userProfile.email,
        'avatar': this.userProfile.avatar,
        'username': this.userProfile.username,
        'phone': this.userProfile.phone,
        'address': this.userProfile.address,
        'city': this.userProfile.city,
        'state': this.userProfile.state,
        'country': this.userProfile.country,
        'zipcode': this.userProfile.zipcode
      },
    });
  }

  onSignOut() {
    this.authService.setLoggedIn(false);
    this.routerExtensions.navigate(["login"]);
  }
}
