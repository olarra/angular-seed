import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPokemonsComponent } from '@app/modules/feature/pokemons/components/list-pokemons/list-pokemons.component';

const routes: Routes = [
  { path: '', component: ListPokemonsComponent }, // default route of the module
  { path: 'pokemons', component: ListPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
