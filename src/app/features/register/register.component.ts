import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";

@Component({
  moduleId: module.id,
  selector: "ns-details",
  templateUrl: "register.component.html",
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page
  ) {
    this.createForm();
    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ["", ],
      lastName: ["", ],
      address: ["", ],
      city: ["", ],
      state: ["", ],
      zipcode: ["", ],
      email: ["", ],
      password: ["", ],
      confirmPassword: ["", ],
    });
  }

  onSubmit() {
    console.log(
      this.registerForm.get("email").value,
      this.registerForm.get("password").value
    );
  }

  onLogin() {
    this.routerExtensions.navigate(["login"]);
  }

  onBack() {
    this.routerExtensions.navigate(["home"]);
  }
}
