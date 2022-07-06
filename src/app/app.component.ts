import { Component } from '@angular/core'
import { AuthService } from "~/app/core/services/auth.service";

@Component({
  moduleId: module.id,
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private authService: AuthService){
  }

  isLoggedIn(){
    return this.authService.loggedIn;
  }

}


