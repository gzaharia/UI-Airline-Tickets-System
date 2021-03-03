import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [ModulesComponent, HomeComponent],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        SharedModule
    ]
})
export class ModulesModule { }
