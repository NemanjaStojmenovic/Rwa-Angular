import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store'
import { State } from 'src/app/store'; 
import {  SearchDestinationType } from 'src/app/store/action';
import { Destination } from 'src/app/models/destination';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input()
  public destination:Destination={
    city:""
  }
  izabranaOpcija: string;
  izabranaDrzava: string;
  opcija:string;
  searchCountry:string;

  options=[
    {name:'Avantura', value:'Avantura'},
    {name:'Medeni mesec', value:'Medeni'},
    {name:'Obilazak', value:'Obilazak'},
    {name:'Porodicno', value:'Porodicno'},
    {name:'Odmor', value:'Odmor'}
    
  ]

  opcije=[
    {name:'Italy', value:'Italy'},
    {name:'Spain', value:'Spain'},
    {name:'France', value:'France'},
    {name:'Greece', value:'Grecce'},
    {name:'Turkey', value:'Turkey'}

  ]

  constructor(private store$: Store<State>) { }

  ngOnInit() {
  }
  searchType() {
    this.opcija=this.izabranaOpcija;
    console.log(this.opcija);
   // console.log(this.searchCountry);
    this.store$.dispatch(new SearchDestinationType(this.opcija, this.izabranaDrzava));
   
   }
}
