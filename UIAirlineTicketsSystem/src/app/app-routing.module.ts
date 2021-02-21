import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';


const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: 'ro', pathMatch: 'full'},
      {
        path: ':lang',
        loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}