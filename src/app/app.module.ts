import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestinacijaComponent } from './components/destinacija/destinacija.component';
import { PreporukaComponent } from './components/preporuka/preporuka.component';
import { SearchComponent } from './components/search/search.component';

import { HttpClientModule } from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';


import { StoreModule } from "@ngrx/store"
import { rootReducer } from './store';
import { FormsModule } from '@angular/forms';
import { ListaDestinacijaComponent } from './components/lista-destinacija/lista-destinacija.component';
import { ViewdetailsComponent } from './components/viewdetails/viewdetails.component';
import { effects } from './store/effects';
import { DestinationService } from './services/destination.service';
import { HotelComponent } from './components/hotel/hotel.component';
import { ListaHotelaComponent } from './components/lista-hotela/lista-hotela.component';
import { HotelService } from './services/hotel.service';
import { AnimacijaComponent } from './components/animacija/animacija.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinacijaComponent,
    PreporukaComponent,
    SearchComponent,
    ListaDestinacijaComponent,
    ViewdetailsComponent,
    HotelComponent,
    ListaHotelaComponent,
    AnimacijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    StoreModule.forRoot(rootReducer),
     EffectsModule.forRoot(effects)
  ],
  providers: [DestinationService, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
