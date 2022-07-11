import { Component } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core';
import { ProfileModel } from '~/app/core/models/profile.model';

@Component({
    moduleId: module.id,
    selector: 'ns-profile-edit',
    templateUrl: 'profile-edit.component.html'
})
export class ProfileEditComponent {

  userProfile: ProfileModel | undefined = undefined;

  profileForm: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private routerExtensions: RouterExtensions,
        private page: Page,
        private fb: FormBuilder
  ) {
    page.actionBarHidden = true;
    this.activatedRoute.queryParams.subscribe(params => {
      let profile: ProfileModel = {
        name: params['name'],
        email: params['email'],
        avatar: params['avatar'],
        username: params['username'],
        phone: params['phone'],
        address: params['address'],
        city: params['city'],
        state: params['state'],
        country: params['country'],
        zipcode: params['zipcode'],
      };
      this.userProfile = profile;
  });
  }

    ngOnInit(): void {
      this.createForm();
    }

    createForm() {
      this.profileForm = this.fb.group({
        name: [this.userProfile.name, ],
        email: [this.userProfile.email, ],
        avatar: [this.userProfile.avatar, ],
        username: [this.userProfile.username, ],
        phone: [this.userProfile.phone, ],
        address: [this.userProfile.address, ],
        city: [this.userProfile.city, ],
        state: [this.userProfile.state, ],
        country: [this.userProfile.country, ],
        zipcode: [this.userProfile.zipcode, ],
      });
    }

    onTapBack(){
      this.routerExtensions.back();
    }

    onSave(){
      this.routerExtensions.back();
    }
}


