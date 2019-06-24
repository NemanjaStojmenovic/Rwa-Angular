
import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
 import {Observable} from "rxjs";
 import {map} from 'rxjs/operators';
import { Hotel } from '../models/hotel';
import { environment } from 'src/environments/environment';


@Injectable()
export class HotelService {

    constructor(private http:HttpClient) {

    }
    
     public getHotels(city):Observable<Hotel[]>{
        return this.http.get<Hotel[]>(environment.url+"/hoteli?city="+city)
      //  .pipe(map(res=> res.json()))
       }
 }

   

    
