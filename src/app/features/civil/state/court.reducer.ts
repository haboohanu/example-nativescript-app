import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { CourtModel } from '~/app/core/models/court.model';
import * as CourtActions from './court.actions';

export interface State{
  courts: CourtState;
}

export interface CourtState{
  showCourtDetails: boolean;
  currentCourt: CourtModel,
  courts: CourtModel[];
}

const initialState: CourtState = {
  showCourtDetails: false,
  currentCourt: null,
  courts: []
}

const getCourtFeatureState = createFeatureSelector<CourtState>('courts');

export const getShowCourtDetails = createSelector(
  getCourtFeatureState,
  state => state.showCourtDetails
)
export const getCourts = createSelector(
  getCourtFeatureState,
  state => state.courts
)

export const courtReducer = createReducer<CourtState>(
  initialState,
  on(CourtActions.toggleCourtDetails, (state): CourtState => {
    return{
      ...state,
      showCourtDetails: !state.showCourtDetails
    };
  }),
  // on(CourtActions.setCurrentCourt, (state, action): CourtState => {
  //   return {
  //     ...state,
  //     currentCourt: action.court
  //   };
  // }),
);



