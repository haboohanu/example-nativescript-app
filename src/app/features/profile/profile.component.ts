import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { ProfileService } from "~/app/core/services/profile.service";
import { ProfileModel } from '~/app/core/models/profile.model'

@Component({
  moduleId: module.id,
  selector: "ns-profile",
  templateUrl: "profile.component.html",
})
export class ProfileComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private profileService: ProfileService
  ) {
    page.actionBarHidden = true;
  }

  userProfile: ProfileModel | undefined = undefined;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.profileService.getProfile().subscribe(
      (res) =>{
        let profile: ProfileModel = {
          name:`${res.results[0].name.first} ${res.results[0].name.last}`,
          email:res.results[0].email,
          avatar:res.results[0].picture.large,
        }
        this.userProfile = profile;
        console.log(this.userProfile)
        //console.log(res);

      }

    );
  }


  onTapSettings(event){

  }


}
