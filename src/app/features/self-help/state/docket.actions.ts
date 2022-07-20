import { createAction, props } from "@ngrx/store";
import { DocketModel } from "../../../core/models/docket.model";


export const setCurrentDocket = createAction(
  '[Docket] Set Current Docket',
  props<{docket: DocketModel }>()
)

export const setDocketsList = createAction(
  '[Docket] Set Dockets List',
  props<{docket: DocketModel }>()
)

export const setCurrentFilter = createAction(
  '[Docket] Set Current Filter',
  props<{filter: String }>()
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

