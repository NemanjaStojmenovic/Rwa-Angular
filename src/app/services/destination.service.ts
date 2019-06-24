
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Destination } from '../models/destination';
import { environment } from 'src/environments/environment';

@Injectable()
export class DestinationService {

  constructor(private http: HttpClient) {

  }

  public getAll(): Observable<Destination[]> {
    return this.http.get<Destination[]>(environment.url + '/destinacije')
    //.pipe(map(res=> res.json()))
  }

  public searchDestinationType(type, country): Observable<Destination[]> {
    let url = environment.url + '/destinacije';
    if (type || country)
      url += '?';
    if (type)
      url += 'type=' + type;
    if (country)
      url += (type ? '&' : '') + 'country=' + country;
    console.log(url);
    return this.http.get<Destination[]>(url)
    //  .pipe(map(res=> res.json()))
  }
}




