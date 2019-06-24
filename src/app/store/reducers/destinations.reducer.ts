
import { Action, State  } from "@ngrx/store";
import { HttpClient } from '@angular/common/http';
import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import { Destination } from '../../models/destination';
import { SEARCH_DESTINATION_TYPE_SUCCESS, SearchDestinationTypeSuccess, LOAD_DESTINATIONS_SUCCESS, LoadDestinationsSuccess, SearchDestinationSuccess, SEARCH_DESTINATION_SUCCESS } from '../action';
   
export interface DestinationState extends EntityState<Destination>{
    
}

const adapter: EntityAdapter<Destination>=createEntityAdapter<Destination>();

export const initialState: DestinationState={
    ids:[],
    entities:{}
}

export default function (state:DestinationState = initialState, action: Action) {
  
    switch (action.type) {
     case LOAD_DESTINATIONS_SUCCESS:{   
        const {destinations}=(action as LoadDestinationsSuccess)    
        return (adapter.addMany(destinations,state))
        }
    
    case SEARCH_DESTINATION_SUCCESS:{
        const {destination}=(action as SearchDestinationSuccess)
        const clean=adapter.removeAll(state)
        return adapter.addOne(destination,clean)
        }

     case SEARCH_DESTINATION_TYPE_SUCCESS:{
            const {destinations}=(action as SearchDestinationTypeSuccess)
            adapter.removeAll(state)
            return (adapter.addMany(destinations,state))
          }

         default:{
          return initialState;
         }
        }
    }





export const selectors=adapter.getSelectors();
