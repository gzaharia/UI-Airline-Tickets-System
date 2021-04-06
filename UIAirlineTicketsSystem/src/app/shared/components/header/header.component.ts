import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavModel} from '../../../core/models/navModel';
import {Router} from '@angular/router';
import {UtilityService} from '../../../core/services/utility.service';
import {Overlay} from '@angular/cdk/overlay';
import {LogInModalComponent} from '../../modals/log-in-modal/log-in-modal.component';
import {MatDialog} from '@angular/material/dialog';
import {UserModel} from '../../../core/models/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navLinks: NavModel[];
  public display: boolean;
  public user: UserModel;
  constructor(public translateService: TranslateService,
              public router: Router,
              private utilityService: UtilityService,
              private overlay: Overlay,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.initNavLinks();
  }

  /** init navbar links */
  private initNavLinks(): void {
    this.navLinks = [
      {link: 'header.nav.home', route: 'home'},
      {link: 'header.nav.about', route: 'about'},
      {link: 'header.nav.service', route: 'service'},
      {link: 'header.nav.contact', route: 'contact'}
    ];
  }

  /** generate translate in route */
  public generateTranslateRouteLink(lang: string): string {
    let url: string;
    if (this.router.url.includes('?')) {
      url = this.router.url.substring(0, this.router.url.lastIndexOf('?'));
    } else {
      url = this.router.url;
    }
    return url.replace(/^[/a-z]{3}/, '/' + lang);
  }

  public onDisplay(): void {
    this.display = true;
    this.utilityService.setDisplay(this.display);
  }

  public onOpenLogInModal() {
    // const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.dialog.open(LogInModalComponent, {
      autoFocus: false, disableClose: true,
      data: this.user
    });
    // document.body.style.overflowY = 'hidden';
  }
}
