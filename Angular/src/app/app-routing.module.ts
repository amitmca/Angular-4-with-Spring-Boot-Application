import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BikesComponent} from './bikes.component'

const routes: Routes = [
  { path: '', redirectTo: '/bikes', pathMatch: 'full' },
  { path: 'bikes',  component: BikesComponent }
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
