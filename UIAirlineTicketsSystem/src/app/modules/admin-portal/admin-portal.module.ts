import {NgModule} from '@angular/core';
import {AdminPortalComponent} from './admin-portal.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../../core/guards/auth.guard';
import {FlightsComponent} from './flights/flights.component';
import {FlightTableComponent} from './flights/flight-table/flight-table.component';
import {FlightCreateComponent} from './flights/flight-create/flight-create.component';
import {FlightViewComponent} from './flights/flight-view/flight-view.component';
import {TicketsComponent} from './tickets/tickets.component';
import {TicketCreateComponent} from './tickets/ticket-create/ticket-create.component';
import {TicketTableComponent} from './tickets/ticket-table/ticket-table.component';
import {TicketViewComponent} from './tickets/ticket-view/ticket-view.component';
import {AirportsComponent} from './airports/airports.component';
import {AirportTableComponent} from './airports/airport-table/airport-table.component';
import {AirportCreateComponent} from './airports/airport-create/airport-create.component';
import {AirportViewComponent} from './airports/airport-view/airport-view.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'airports',
        component: AirportTableComponent
      },
      {
        path: 'flights',
        component: FlightTableComponent
      },
      {
        path: 'tickets',
        component: TicketTableComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminPortalComponent,
    FlightsComponent,
    FlightTableComponent,
    FlightCreateComponent,
    FlightViewComponent,
    TicketsComponent,
    TicketCreateComponent,
    TicketTableComponent,
    TicketViewComponent,
    AirportsComponent,
    AirportTableComponent,
    AirportCreateComponent,
    AirportViewComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AdminPortalComponent
  ]
})

export class AdminPortalModule {
}
