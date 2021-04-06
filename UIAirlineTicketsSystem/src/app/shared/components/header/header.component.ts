import {Component, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {NavModel} from '../../../core/models/navModel';
import {Router} from '@angular/router';
import {UtilityService} from '../../../core/services/utility.service';
import {UserModel} from '../../../core/models/user.model';
import {AuthService} from '../../../core/services/auth.service';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  displayLoginModal = false;
  public navLinks: NavModel[];
  public display: boolean;
  public user: UserModel;
  isLoggedIn = false;
  subscription: Subscription;
  search = new FormControl();
  isSearching = false;

  constructor(public translateService: TranslateService,
              public router: Router,
              private utilityService: UtilityService,
              private authService: AuthService) {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initNavLinks();
    this.subscription = this.authService.isLoggedIn.subscribe(value => {
        this.isLoggedIn = value;
      }
    );
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

  onSelectLang(lang: string) {
    this.translateService.use(lang);
    sessionStorage.setItem('lang', lang);
  }


  public onOpenLogInModal() {
    // const scrollStrategy = this.overlay.scrollStrategies.reposition();
    this.displayLoginModal = !this.displayLoginModal;
    this.router.navigate(['auth']);
    // this.dialog.open(LogInModalComponent, {
    //   autoFocus: false, disableClose: true,
    //   data: this.user,
    //   width: '350px',
    //   height: '350px'
    // });
    // document.body.style.overflowY = 'hidden';
  }

  closeModal(isLoggin: boolean): void {
    console.log(isLoggin);
    this.displayLoginModal = isLoggin;
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  onSearchAviaDestination(value: string): void {
    console.log(value);
  }
}
