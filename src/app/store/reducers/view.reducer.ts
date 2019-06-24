
import { Action } from "@ngrx/store";
import { VIEW_DETAILS, ViewDetails} from "../action";
import { Destination } from 'src/app/models/destination';
import { HttpClient } from '@angular/common/http';

export default function (view: Destination=null, action: Action) {
    switch (action.type) {
        case VIEW_DETAILS: {
            const {destination} = (action as  ViewDetails);
           
            return destination;            
        }
        default:
        return view;
    }
}