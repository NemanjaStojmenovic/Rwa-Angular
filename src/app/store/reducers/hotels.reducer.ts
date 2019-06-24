
import { Action, State  } from "@ngrx/store";
import { HttpClient } from '@angular/common/http';
import {EntityState,createEntityAdapter,EntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import {  SearchHotelsSuccess, SEARCH_HOTELS_SUCCESS } from '../action';
import { Hotel } from 'src/app/models/hotel';
   
export interface HotelState extends EntityState<Hotel>{
    
}

const adapter: EntityAdapter<Hotel>=createEntityAdapter<Hotel>();

export const initialState: HotelState={
    ids:[],
    entities:{}
}

export default function (state:HotelState = initialState, action: Action) {
  
    switch (action.type) {
   
        case SEARCH_HOTELS_SUCCESS:{
            const {hotels}=(action as SearchHotelsSuccess)
            adapter.removeAll(state)
            return (adapter.addMany(hotels,state))
          }

         default:{
          return initialState;
         }
        }
    }





export const selectors=adapter.getSelectors();
