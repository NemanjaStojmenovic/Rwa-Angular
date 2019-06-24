import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { HotelState } from 'src/app/store/reducers/hotels.reducer';
import {selectors as HotelSelectors} from '../../store/reducers/hotels.reducer';
import { SearchHotels } from 'src/app/store/action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-hotela',
  templateUrl: './lista-hotela.component.html',
  styleUrls: ['./lista-hotela.component.scss']
})
export class ListaHotelaComponent {

  hotels$: Observable<HotelState>
  list:Hotel[]
 
  constructor(private store$: Store<State>, activatedRoute: ActivatedRoute) {
    this.hotels$ = this.store$.select(state => state.hotels)
       this.hotels$.subscribe(list =>{
       if(list!=undefined)
         this.list = HotelSelectors.selectAll(list)       
    })

    activatedRoute.params.subscribe(x => {
      const city = x['cityName'];
      this.store$.dispatch(new SearchHotels(city));
    })
   }

  

   /*onSearchHotel(city:string){
     this.store$.dispatch(new SearchHotels(city));
     this.view$ = this.store$.select(state => state.view)
     console.log(this.view$);
   }*/
 
}
