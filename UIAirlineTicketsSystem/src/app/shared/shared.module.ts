import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {TransformPipe} from './pipes/transform.pipe';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, TransformPipe],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TransformPipe
  ]
})
export class SharedModule {
}
