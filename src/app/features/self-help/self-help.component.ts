import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "@nativescript/angular";
import { action, ItemEventData, Page } from "@nativescript/core";
import { CourtService } from "~/app/core/services/court.service";
import { DocketModel } from "~/app/core/models/docket.model";

@Component({
  moduleId: module.id,
  selector: "ns-self-help",
  templateUrl: "self-help.component.html",
})
export class SelfHelpComponent {

  dockets: DocketModel[] = []
  filteredDockets: DocketModel[] = []
  searchPhrase: String;
  searchType: String;

  constructor(
    private routerExtensions: RouterExtensions,
    private fb: FormBuilder,
    private page: Page,
    private courtService: CourtService
  ) {

    //page.actionBarHidden = true;
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
        this.filteredDockets = this.dockets
      });
  }


  onDocketTap(args: ItemEventData): void {
    this.routerExtensions.navigate(["docketdetails", this.dockets[args.index].id]);
  }



  onBack() {
    this.routerExtensions.navigate(["home"]);
  }

  onTextChangedName(event){
    console.log(event.value);
    this.filteredDockets = this.filterByDocketName(event.value)
  }

  onTextChangedNumber(event){
    console.log(event.value);
    this.filteredDockets = this.filterByDocketNumber(event.value)
  }

  onClear(event){

  }

  onSubmit(event){

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
      this.searchType = result;
  });
  }
}
