import { Action } from '@ngrx/store';
import { Destination } from '../models/destination';
import { Hotel } from '../models/hotel';

export const SEARCH_DESTINATION_TYPE="Search destination type";
export const SEARCH_DESTINATION_TYPE_SUCCESS = "Search destination type sucess";
export const VIEW_DETAILS="View details";

export const LOAD_DESTINATIONS="Load destinations";
export const LOAD_DESTINATIONS_SUCCESS="Load destinations success";
export const SEARCH_DESTINATION = "Search destination";
export const SEARCH_DESTINATION_SUCCESS = "Search destination sucess";

export const SEARCH_HOTELS="Search hotels";
export const SEARCH_HOTELS_SUCCESS = "Search hotels success";


export class LoadDestinations implements Action {
    type = LOAD_DESTINATIONS;
   
    constructor(){

    }
}
export class LoadDestinationsSuccess implements Action {
    type = LOAD_DESTINATIONS_SUCCESS;
    
    constructor(public destinations: Destination[]){
       
   
    }
}
export class SearchDestination implements Action {
    type = SEARCH_DESTINATION;
   
    constructor(public title: String){
//ovde treba umesto title - type
    }
}
export class SearchDestinationSuccess implements Action{
    type=SEARCH_DESTINATION_SUCCESS;

    constructor(public destination:Destination)
    {

    }
}


export class SearchHotels implements Action {
    type = SEARCH_HOTELS;
  public Hotels:Hotel[];
   constructor(public hotelCity: string){
 
   
    }
}
export class SearchHotelsSuccess implements Action{
    type=SEARCH_HOTELS_SUCCESS;

    constructor(public hotels:Hotel[])
    {

    }
}
export class ViewDetails implements Action{
    type=VIEW_DETAILS;

    constructor(public destination:Destination){
        
    }
}

export class SearchDestinationType implements Action {
    type = SEARCH_DESTINATION_TYPE;
  public Destinations:Destination[];
   constructor(public destType: string, public destCountry){
 
   
    }
}
export class SearchDestinationTypeSuccess implements Action{
    type=SEARCH_DESTINATION_TYPE_SUCCESS;

    constructor(public destinations:Destination[])
    {

    }
}