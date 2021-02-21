import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit, OnDestroy {

  private routerSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translateService: TranslateService
  ) {
    this.iniTranslation();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  /** init translation */
  private iniTranslation(): void {
    this.routerSubscription = this.activatedRoute.paramMap.pipe(map(param => param.get('lang')))
      .subscribe(currentLang => {
        const langs = this.translateService.getLangs();
        const lang = langs?.includes(currentLang) ? currentLang : 'ro';
        langs?.includes(currentLang) ? this.translateService.use(lang)
          : this.router.navigate([this.router.url?.replace(currentLang, '/' + lang)]).then(() => {
            this.translateService.use(lang);
          });
      });
  }

}
