import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { DocketModel } from '../../../core/models/docket.model';
import * as DocketActions from './docket.actions';

export interface State{
  courts: DocketState;
}

export interface DocketState{
  currentFilter: String | null;
  currentDocket: DocketModel | null;
  dockets: DocketModel[];
}

const initialState: DocketState = {
  currentFilter: null,
  currentDocket: null,
  dockets: [],
}

const getCourtFeatureState = createFeatureSelector<DocketState>('dockets');

export const getCurrentDocket = createSelector(
  getCourtFeatureState,
  state => state.currentDocket
)
export const getCurrentFilter = createSelector(
  getCourtFeatureState,
  state => state.currentFilter
)
export const getDockets = createSelector(
  getCourtFeatureState,
  state => state.dockets
)

export const docketReducer = createReducer<DocketState>(
  initialState,
  on(DocketActions.setCurrentDocket, (state, action): DocketState => {
    return{
      ...state,
      currentDocket: action.docket
    };
  }),
  on(DocketActions.setDocketsList, (state, action): DocketState => {
    return {
      ...state,
      dockets: state.dockets
    };
  }),
  on(DocketActions.setCurrentFilter, (state, action): DocketState => {
    return {
      ...state,
      currentFilter: action.filter
    };
  }),
);



