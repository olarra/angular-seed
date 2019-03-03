import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Angular Material */
import { MaterialModule } from '@app/modules//material/material.module';
/* Shared Module Material */
import { SharedModule } from '@app/modules/shared/shared.module';
/* Pokemon Routing Module */
import { PokemonRoutingModule } from './pokemon-routing.module';
/* Components used in the module */
import { ListPokemonsComponent } from '@app/modules/feature/pokemons/components/list-pokemons/list-pokemons.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    PokemonRoutingModule
  ],
  declarations: [ListPokemonsComponent],
  // exports : [ListPokemonsComponent, SharedModule] // Just needed if we want to use the component in an external module
})
export class PokemonsModule { }
