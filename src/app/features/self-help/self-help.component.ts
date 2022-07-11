import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { CourtService } from "~/app/core/services/court.service";
import { DocketModel } from "~/app/core/models/docket.model";

@Component({
  moduleId: module.id,
  selector: "ns-self-help",
  templateUrl: "self-help.component.html",
})
export class SelfHelpComponent {

  dockets: DocketModel[] = []

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private courtService: CourtService
  ) {

    page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getDockets();
  }

  getDockets() {
    this.courtService
      .getDockets()
      .subscribe((res) => {
        for(let d of res.results){
          let _docket: DocketModel = {
            id: d.id,
            docketName: d.case_name,
            docketNumber: d.docket_number_core,
            date: d.date_last_filing,
            court: d.court
          }
          this.dockets.push(_docket);
        }
        console.log(this.dockets);
      });
  }




  onBack() {
    this.routerExtensions.navigate(["home"]);
  }
}
