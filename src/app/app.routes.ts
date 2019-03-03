import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'pokemons', redirectTo: '/pokemons' },
  { path: 'pokemons', loadChildren: './modules/feature/pokemons/pokemons.module#PokemonsModule' },
  { path: '404', redirectTo: '/404' },
  { path: '**', redirectTo: '/404' }
];
