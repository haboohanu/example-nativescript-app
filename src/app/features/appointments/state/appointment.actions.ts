import { createAction, props } from "@ngrx/store";
import { AppointmentModel } from "../../../core/models/appointment.model";


export const showAppointmentList = createAction(
  '[Appointment] Show List'
)

export const addToAppointmentList = createAction(
  '[Appointment] Add To List',
  props<{appointment: AppointmentModel }>()
)

export const loadContacts = createAction(
  '[Appointment] Load Contacts'
)

export const loadContactsSuccess = createAction(
  '[Appointment] Load Contacts',
  props<{contacts: any }>()
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

