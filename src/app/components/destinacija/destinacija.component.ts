import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Destination } from 'src/app/models/destination';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';
import { SearchHotels } from 'src/app/store/action';
import { Route } from '@angular/router';

@Component({
  selector: 'app-destinacija',
  templateUrl: './destinacija.component.html',
  styleUrls: ['./destinacija.component.scss']
})
export class DestinacijaComponent implements OnInit {

  view$: Observable<Destination>

  @Input()
  public destination: Destination = {
    city: ""
  }
  @Input()
  public clicked: Destination;

  detailsVisible: boolean;


  constructor(private store$: Store<State>) {
    this.view$ = this.store$.select(state => state.view)
  }

  ngOnInit() {
  }

}
