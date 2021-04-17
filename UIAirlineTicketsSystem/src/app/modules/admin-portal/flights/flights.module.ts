import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './flights.component';
import {FlightTableComponent} from './flight-table/flight-table.component';
import {FlightCreateComponent} from './flight-create/flight-create.component';
import {FlightViewComponent} from './flight-view/flight-view.component';
import {SharedModule} from '../../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FlightsComponent,
    children: [
      {
        path: 'overview',
        component: FlightTableComponent
      },
      {
        path: 'create',
        component: FlightCreateComponent
      },
      {
        path: ':id/edit',
        component: FlightCreateComponent
      },
      {
        path: ':id/view',
        component: FlightViewComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    FlightsComponent,
    FlightTableComponent,
    FlightCreateComponent,
    FlightViewComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})

export class FlightsModule {
}
