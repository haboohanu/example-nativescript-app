import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from "@ngrx/store";
import { AppointmentModel } from "../../../core/models/appointment.model";
import { ContactModel } from "../../../core/models/contact.model";
import * as AppointmentActions from "./appointment.actions";

export interface State {
  appointments: AppointmentState;
}

export interface AppointmentState {
  appointments: AppointmentModel[];
  contacts: any;
}

const initialState: AppointmentState = {
  appointments: [
    {
      court: {
        id: 'id',
        courtName: 'Court 1',
        url: 'url',
        jurisdiction: 'jurisditction',
      },
      judge: {
        name: 'Judge 1',
        email: 'email',
        phone: 'phone',
      },
      date: new Date(),
      time: new Date(),
    },
    {
      court: {
        id: 'id',
        courtName: 'Court 2',
        url: 'url',
        jurisdiction: 'jurisditction',
      },
      judge: {
        name: 'Judge 2',
        email: 'email',
        phone: 'phone',
      },
      date: new Date(),
      time: new Date()
    }
  ],
  contacts: null
};

const getAppointmentFeatureState =
  createFeatureSelector<AppointmentState>("appointments");


export const getShowAppointmentsList = createSelector(
  getAppointmentFeatureState,
  (state) => state.appointments
);

export const getContacts = createSelector(
  getAppointmentFeatureState,
  (state) => state.contacts
);

export const appointmentReducer = createReducer<AppointmentState>(
  initialState,
  on(AppointmentActions.showAppointmentList, (state): AppointmentState => {
    return {
      ...state,
      appointments: state.appointments,
    };
  }),
  on(AppointmentActions.addToAppointmentList, (state, action): AppointmentState => {
    return {
      ...state,
      appointments: state.appointments.concat([action.appointment]).sort(compareAppointmentDateTime)
    };
  }),
  on(AppointmentActions.loadContactsSuccess, (state, action): AppointmentState =>{
    return{
      ...state,
      contacts: action.contacts
    }
  })
);



function compareAppointmentDateTime(a: AppointmentModel, b: AppointmentModel) {
  if (a.date > b.date) {
    return 1;
  } else if (a.date < b.date) {
    return -1;
  } else {
    if (a.time > b.time) {
      return 1;
    } else {
      return -1;
    }
  }
}
