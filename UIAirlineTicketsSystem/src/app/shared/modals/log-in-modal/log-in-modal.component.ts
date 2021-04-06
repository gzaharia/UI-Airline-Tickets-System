import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {

  public formLogin: FormGroup = this.formBuilder.group({
    username: [null, Validators.compose([Validators.required])],
    password: [null, Validators.compose([Validators.required])]
  });

  public error: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
    this.error = '';
  }

  ngOnInit(): void {
  }


  public onLogin(): void {
    this.authService.login(this.formLogin.value).pipe(first()).subscribe(data => {
      this.formLogin.reset();
      this.error = '';
    }, error => {
      this.error = error;
    });

  }
}
