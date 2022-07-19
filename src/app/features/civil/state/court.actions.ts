import { createAction, props } from "@ngrx/store";
import { CourtModel } from "../../../core/models/court.model";


export const toggleCourtDetails = createAction(
  '[Court] Toggle Court Details'
)

// export const setCurrentCourt = createAction(
//   '[Court] Set Current Court',
//   props<{ court: CourtModel }>()
// )

// export const loadCourts = createAction(
//   '[Court] Load'
// )
// export const loadCourtsSuccess = createAction(
//   '[Court] Load Success',
//   props<{ courts: { results: any; }; }>()
// )

