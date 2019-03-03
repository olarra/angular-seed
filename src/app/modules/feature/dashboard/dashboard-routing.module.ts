import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
