import { Component, OnInit, Input } from '@angular/core';
import { Destination } from 'src/app/models/destination';

import { State } from '../../store';
import { Observable } from 'rxjs';
import { DestinationService } from '../../services/destination.service';
import {SearchDestination} from '../../store/action';
import { ViewDetails } from '../../store/action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-viewdetails',
  templateUrl: './viewdetails.component.html',
  styleUrls: ['./viewdetails.component.scss']
})
export class ViewdetailsComponent implements OnInit {

  @Input()
  public destination: Destination


constructor(private store$: Store<State>) {


 }

ngOnInit() {
  
}




}
