import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { action, Page } from "@nativescript/core";
import { CourtService } from "../../core/services/court.service";
import { DocketModel } from "../../core/models/docket.model";
import { Store } from "@ngrx/store";
import { State } from "../self-help/state/docket.reducer";
import * as DocketActions from "../self-help/state/docket.actions"

@Component({
  moduleId: module.id,
  selector: "ns-docket-details",
  templateUrl: "docket-details.component.html",
})
export class DocketDetailsComponent {
  docket: DocketModel = undefined;
  id = +this.activatedRoute.snapshot.params.id;
  constructor(
    private routerExtensions: RouterExtensions,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private page: Page,
    private courtService: CourtService,
    private store: Store<State>
  ) {
    //page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getDocketByNumber();
  }

  getDocketByNumber() {
    this.courtService.getDocketByNumber(this.id).subscribe((res) => {
      let _docket: DocketModel = {
        id: res.id,
        docketName: res.case_name,
        docketNumber: res.docket_number_core,
        date: res.date_last_filing,
        court: res.court,
      };
      this.docket = _docket;

      console.log(this.docket);
    });
  }

  onBack() {
    this.setCurrentDocket(null);
    this.routerExtensions.navigate(['selfhelp'])
  }

  onSearchTap() {
    let options = {
      title: "Search selection",
      message: "Choose docket search type",
      cancelButtonText: "Cancel",
      actions: ["Docket Name", "Docket Number"],
    };

    action(options).then((result) => {
      console.log(result);
    });
  }

  setCurrentDocket(docket: DocketModel | null) {
    this.store.dispatch(
      DocketActions.setCurrentDocket({ docket })
    );
  }
}
