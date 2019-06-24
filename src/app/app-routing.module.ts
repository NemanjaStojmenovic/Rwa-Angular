import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaDestinacijaComponent } from './components/lista-destinacija/lista-destinacija.component';
import { DestinacijaComponent } from './components/destinacija/destinacija.component';
import { ListaHotelaComponent } from './components/lista-hotela/lista-hotela.component';

const routes: Routes = [
  
  {
    path: "",
    component: ListaDestinacijaComponent
  },
  {
    path: "city/:cityName",
    component: ListaHotelaComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
