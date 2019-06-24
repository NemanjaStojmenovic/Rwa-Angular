import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from '../../store';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  view$: Observable<Hotel>
    
  @Input() 
  public hotel: Hotel={
    city:""
  }
  @Input()
  public clicked:Hotel;

  @Output()
  public clickedEvent:EventEmitter<Hotel>=new EventEmitter();

  
  constructor(private store$: Store<State>) { 
    this.view$ = this.store$.select(state => state.view)
  }

  ngOnInit() {
    console.log(this.hotel);
  }

 

}
