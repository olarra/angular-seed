/* Angular Essential Modules */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
/* Core Module */
import { CoreModule } from './modules/core/core.module';
/* Feature/Dashboard Module */
import { DashboardModule } from './modules/feature/dashboard/dashboard.module';
/* Feature/NotFound Module */
import { ErrorModule } from './modules/feature/error/error.module';
/* Feature/Pokemons Module */
// Lazy Loading => import { PokemonsModule } from './modules/feature/pokemons/pokemons.module';
/* App Root */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    DashboardModule,
    ErrorModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
