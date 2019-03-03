import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from '@app/modules/feature/dashboard/components/home-dashboard/home-dashboard.component';
/* Angular Material */
import { MaterialModule } from '@app/modules/material/material.module';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [ CommonModule, MaterialModule, DashboardRoutingModule ],
  exports : [ HomeDashboardComponent ],
  declarations: [ HomeDashboardComponent ]
})
export class DashboardModule { }
