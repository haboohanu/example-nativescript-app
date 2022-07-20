import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { action, ItemEventData, Page } from "@nativescript/core";
import { CourtService } from "~/app/core/services/court.service";
import { DocketModel } from "~/app/core/models/docket.model";
import { Store } from "@ngrx/store";
import { getCurrentDocket, getCurrentFilter, State } from "./state/docket.reducer";
import * as DocketActions from "./state/docket.actions"

@Component({
  moduleId: module.id,
  selector: "ns-self-help",
  templateUrl: "self-help.component.html",
})
export class SelfHelpComponent {

  dockets: DocketModel[] = []
  filteredDockets: DocketModel[] = []
  searchPhrase: String;
  searchType: String | null;
  currentDocket: DocketModel | null = null;

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private courtService: CourtService,
    private store: Store<State>
  ) {

    //page.actionBarHidden = true;
  }

  ngOnInit(): void {
    this.getCurrentDocket();
    this.getCurrentFilter();
    this.getDockets();
    if(this.currentDocket!=null){
      this.routerExtensions.navigate(["docketdetails", this.currentDocket.id]);
    }

  }

  getDockets() {
    console.log("gettings dockets...")
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
        this.filteredDockets = this.dockets
      });
  }


  onDocketTap(args: ItemEventData): void {
    this.setCurrentDocket(this.dockets[args.index])
    this.routerExtensions.navigate(["docketdetails", this.dockets[args.index].id]);
  }

  onTextChangedName(event){
    console.log(event.value);
    this.filteredDockets = this.filterByDocketName(event.value)
  }

  onTextChangedNumber(event){
    console.log(event.value);
    this.filteredDockets = this.filterByDocketNumber(event.value)
  }

  filterByDocketName(query){
    return this.dockets.filter( docket => docket.docketName.toLowerCase().includes(query.toLowerCase()));
  }

  filterByDocketNumber(query){
    return this.dockets.filter( docket => docket.docketNumber.toLowerCase().includes(query.toLowerCase()));
  }

  onSearchTap(){
    let options = {
      title: "Search selection",
      message: "Choose docket search type",
      cancelButtonText: "Cancel",
      actions: ["Docket Name", "Docket Number"]
  };

  action(options).then((result) => {
      console.log(result);
      //this.searchType = result;
      this.setCurrentFilter(result);
  });
  }

  getCurrentDocket(){
    this.store
    .select(getCurrentDocket)
    .subscribe((currentDocket) => (this.currentDocket = currentDocket));
    console.log("CURRENT DOCKET:", this.currentDocket);
  }

  setCurrentDocket(docket: DocketModel) {
    this.store.dispatch(
      DocketActions.setCurrentDocket({ docket })
    );
  }

  getCurrentFilter(){
    this.store
    .select(getCurrentFilter)
    .subscribe((currentFilter) => (this.searchType = currentFilter));
    console.log("CURRENT Filter:", this.searchType);
  }

  setCurrentFilter(filter: String) {
    this.store.dispatch(
      DocketActions.setCurrentFilter({ filter })
    );
  }

}
