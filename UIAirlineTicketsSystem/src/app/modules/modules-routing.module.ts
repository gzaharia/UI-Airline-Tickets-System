import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModulesComponent} from './modules.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '', component: ModulesComponent, children: [
      {
        path: '', component: HomeComponent
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
