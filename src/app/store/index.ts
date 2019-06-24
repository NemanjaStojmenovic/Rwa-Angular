import { DestinationState } from './reducers/destinations.reducer';
import { ActionReducerMap } from '@ngrx/store';
import destinationsReducer from './reducers/destinations.reducer';
import { Destination } from '../models/destination';
import viewReducer from './reducers/view.reducer';
import hotelsReducer, { HotelState } from './reducers/hotels.reducer';

export * from './effects';

export interface State {
    destinations: DestinationState ,
    hotels:HotelState,
    view: Destination
}

export const rootReducer: ActionReducerMap<State> = {
    destinations: destinationsReducer,
    hotels:hotelsReducer,
    view: viewReducer
}