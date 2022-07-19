import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { map } from "rxjs";
import { CourtService } from "~/app/core/services/court.service";
import { ClusterModel } from "~/app/core/models/cluster.model";
import { CourtModel } from "~/app/core/models/court.model";
import { Store } from "@ngrx/store";
import { getShowCourtDetails, State } from "./state/court.reducer";
import * as CourtActions from "./state/court.actions";
@Component({
  moduleId: module.id,
  selector: "ns-civil",
  templateUrl: "civil.component.html",
})
export class CivilComponent implements OnInit {
  clusters: ClusterModel[] = [];
  courts: CourtModel[] = [];
  filteredCourts: CourtModel[] = [];
  displayDetails: boolean;
  checked: boolean;
  searchPhrase: "SUPREME";

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private courtService: CourtService,
    private store: Store<State>
  ) {
    //page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getClusters();
    this.getCourts();
    this.getShowCourtDetails();
  }

  getClusters() {
    this.courtService.getClusters().subscribe((res) => {
      for (let c of res.results) {
        let _cluster: ClusterModel = {
          id: c.id,
          clusterName: c.case_name,
          date: c.date_filed,
          judge: c.judges
        };
        this.clusters.push(_cluster);
      }
    });
  }

  getCourts() {
    this.courtService.getCourts().subscribe((res) => {
      for (let c of res.results) {
        let _court: CourtModel = {
          id: c.id,
          courtName: c.full_name,
          url: c.url,
          jurisdiction: c.jurisdiction
        };
        this.courts.push(_court);
      }
      console.log(this.courts);
      this.filteredCourts = this.courts;
    });
  }

  getShowCourtDetails() {
    this.store
      .select(getShowCourtDetails)
      .subscribe(
        (showCourtDetails) => (this.displayDetails = showCourtDetails)
      );
  }

  checkChanged() {
    this.store.dispatch(CourtActions.toggleCourtDetails());
  }

  onTextChanged(event){
    console.log(event.value);
    this.filteredCourts = this.filterByCourtName(event.value)
  }

  onClear(event){

  }

  onSubmit(event){

  }

  filterByCourtName(query){
    return this.courts.filter( court => court.courtName.toLowerCase().includes(query.toLowerCase()));
  }

}
