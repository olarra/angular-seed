import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Components */
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ErrorRoutingModule
  ],
  declarations: [PageNotFoundComponent]
})
export class ErrorModule { }
