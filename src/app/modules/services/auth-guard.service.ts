import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { Utils } from '../utils/utils';
import { CryptoService } from './crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  constructor(
    private utils: Utils,
    private router: Router,
    private cryptoService: CryptoService
  ) {}

  canActivateChild(): boolean {
    var isLogin = false;
    var isToken = false;

    const encryptedMapping = this.utils.getLocalStorage('encryptedMapping');

    if (encryptedMapping) {
      const decryptedMapping =
            this.cryptoService.decryptData(encryptedMapping);
        isLogin += decryptedMapping.isLogin;
        isToken += decryptedMapping.token;
    }

    if (isLogin && isToken) {
      return true;
    } else {
      this.router.navigate(['auth/login']).then(() => {
        window.location.reload();
      });
      return false;
    }
  }
}
