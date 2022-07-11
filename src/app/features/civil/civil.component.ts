import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { Page } from "@nativescript/core";
import { map } from "rxjs";
import { CourtService } from "~/app/core/services/court.service";
import { ClusterModel } from "~/app/core/models/cluster.model";
import { CourtModel } from "~/app/core/models/court.model";

@Component({
  moduleId: module.id,
  selector: "ns-civil",
  templateUrl: "civil.component.html",
})
export class CivilComponent {
  clusters: ClusterModel[] = [];
  courts: CourtModel[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private routerExtensions: RouterExtensions,
    private page: Page,
    private courtService: CourtService
  ) {
    //page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getClusters();
    this.getCourts();
  }

  getClusters() {
    this.courtService
      .getClusters()
      .subscribe((res) => {
        for(let c of res.results){
          let _cluster: ClusterModel = {
            id: c.id,
            clusterName: c.case_name,
            date: c.date_filed,
            judge: c.judges
          }
          this.clusters.push(_cluster);
        }
      });
  }

  getCourts() {
    this.courtService
      .getCourts()
      .subscribe((res) => {
        for(let c of res.results){
          let _court: CourtModel = {
            id: c.id,
            courtName: c.full_name,
            url: c.url,
            jurisdiction: c.jurisdiction
          }
          this.courts.push(_court);
        }
        console.log(this.courts);
      });
  }
}
