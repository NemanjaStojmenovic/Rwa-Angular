import *  as destinationActions from '../../store/action';
import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';
import {DestinationService} from '../../services/destination.service';
import { switchMap } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { ofType } from '@ngrx/effects';



@Injectable()
export class DestinationsEffects{

    constructor(
        private actions$: Actions,
        private destinationService: DestinationService

    )
    {}

    @Effect()
    loadDestinations$=this.actions$.pipe(ofType(destinationActions.LOAD_DESTINATIONS),
        switchMap(()=>{
            return this.destinationService.getAll().pipe(
                map(destinations=>new destinationActions.LoadDestinationsSuccess(destinations))
            )
        })
    )

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
    searchedType$=this.actions$.pipe(ofType(destinationActions.SEARCH_DESTINATION_TYPE),
        
        switchMap((destinationType: destinationActions.SearchDestinationType)=>{
            return this.destinationService.searchDestinationType(destinationType.destType, destinationType.destCountry)
            .pipe(
                map(destinations=>new destinationActions.SearchDestinationTypeSuccess(destinations))
            )
        }
    )
    )}
        

    
