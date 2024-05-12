import { Component } from '@angular/core';
import { Label } from '../../utils/label';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  label = Label;

  loading: boolean = false;

  formGroup: FormGroup = this.initFormGroup();

  constructor(
      public layoutService: LayoutService,
      private router: Router,
      private utils: Utils,
  ) {  
  }

  initFormGroup(): FormGroup {
      return new FormGroup({
          username: new FormControl('', Validators.required),
          password: new FormControl('', Validators.required),
      });
  }
}
