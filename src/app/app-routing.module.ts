import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'action', component:ActionComponent },
  { path: 'stats', component:StatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
