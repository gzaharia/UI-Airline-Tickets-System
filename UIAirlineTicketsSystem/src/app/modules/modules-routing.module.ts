import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModulesComponent} from './modules.component';
import {HomeComponent} from './home/home.component';
import {LogInModalComponent} from '../shared/modals/log-in-modal/log-in-modal.component';
import {AuthGuard} from '../core/guards/auth.guard';


const routes: Routes = [
  {
    path: '', component: ModulesComponent, children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: '',
        component: LogInModalComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule {
}
