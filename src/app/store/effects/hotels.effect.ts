import *  as hotelActions from '../../store/action';
import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {HotelService} from '../../services/hotel.service';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { ofType } from '@ngrx/effects';



@Injectable()
export class HotelsEffects{

    constructor(
        private actions$: Actions,
        private hotelService: HotelService

    )
    {}

    

    // @Effect()
    // searchedDestination$=this.actions$.pipe(ofType(destinationActions.SEARCH_DESTINATION_TYPE),
    
    //     map(destination => (destination as destinationActions.SearchDestinationType).type),
    //     switchMap(destination=>{
    //         return this.destinationService.searchDestinationType(destination)
    //         .pipe(
    //             map(a=>new destinationActions.SearchDestination(destination))
    //         )
    //     })
    // )

    @Effect()
    searchedType$=this.actions$.pipe(ofType(hotelActions.SEARCH_HOTELS),
        map((cityHotel)=>
         (cityHotel as hotelActions.SearchHotels).hotelCity,
        ),
        
        switchMap((cityHotel)=>{
            return this.hotelService.getHotels(cityHotel)
            .pipe(
                map(hotels=>new hotelActions.SearchHotelsSuccess(hotels))
            )
        }
    )
    )}
        

    
