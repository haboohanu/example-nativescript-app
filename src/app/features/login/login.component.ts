import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BottomNavigationTab } from '@nativescript-community/ui-material-bottomnavigationbar';
import { RouterExtensions } from '@nativescript/angular'
import { Page } from '@nativescript/core';
import { AuthService } from '~/app/core/services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'ns-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('CB1') CheckBox: ElementRef;

  tabs = [
    new BottomNavigationTab(),
    new BottomNavigationTab()
]

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private authService: AuthService,
  ) {
    page.actionBarHidden = true;
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }


  onBack(){
    this.routerExtensions.navigate(["home"]);
  }

  onLogin(){
    console.log(this.loginForm.get('email').value, this.loginForm.get('password').value)
    this.getCheckProp();
    this.routerExtensions.navigate(["home"]);
    this.authService.setLoggedIn(true);
  }

  onRegister(){
    this.routerExtensions.navigate(["register"]);
  }

  getCheckProp() {
    console.log(
      'checked prop value = ' + this.CheckBox.nativeElement.checked
    );
  }

}
