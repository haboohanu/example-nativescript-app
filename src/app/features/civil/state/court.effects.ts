// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { map, mergeMap } from "rxjs";
// import { CourtService } from "../../../core/services/court.service";
// import * as CourtActions from "./court.actions";

// @Injectable()
// export class CourtEffects {
//   constructor(private actions$: Actions, private courtService: CourtService) {}

  // loadCourts$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(CourtActions.loadCourts),
  //     mergeMap(() =>
  //       this.courtService
  //         .getCourts()
  //         .pipe(map((courts) => CourtActions.loadCourtsSuccess({ courts })))
  //     )
  //   );
  // });
//}
