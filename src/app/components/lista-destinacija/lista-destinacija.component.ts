import { Component, OnInit ,Input} from '@angular/core';
import { Destination } from 'src/app/models/destination';
import {Store} from '@ngrx/store'
import { State } from '../../store';
import { Observable } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import * as fromDestination from '../../store/reducers/destinations.reducer';
import {ViewDetails,LoadDestinations,SearchDestination} from '../../store/action';
import {selectors as DestinationSelectors} from '../../store/reducers/destinations.reducer';
import { DestinationState } from '../../store/reducers/destinations.reducer';

@Component({
  selector: 'app-lista-destinacija',
  templateUrl: './lista-destinacija.component.html',
  styleUrls: ['./lista-destinacija.component.scss']
})
export class ListaDestinacijaComponent implements OnInit {

  view$:Observable<Destination>
  destinations$: Observable<DestinationState>
  list: Destination[];
 
  constructor(private store$: Store<State>) {
    this.destinations$ = this.store$.select(state => state.destinations)
       this.destinations$.subscribe(list =>{
       if(list!=undefined)
         this.list = DestinationSelectors.selectAll(list)       
    })
    
    this.view$ = this.store$.select(state => state.view)
   }

  /* onClickDest(destination: Destination){
    this.store$.dispatch(new ViewDetails(destination))
  }*/

  /* onSearchDestinaton(destination:string){
     this.store$.dispatch(new SearchDestination(destination));
     this.view$ = this.store$.select(state => state.view)
     console.log(this.view$);
   }*/

  ngOnInit() {
    this.store$.dispatch(new LoadDestinations())   
  }
}
