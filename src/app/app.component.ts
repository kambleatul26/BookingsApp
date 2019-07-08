import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Discover Places',
      url: '',
      icon: 'home'
    },
    {
      title: 'Bookings',
      url: '/bookings',
      icon: 'checkbox-outline'
    },
    {
      title: 'Logout',
      url: '/auth',
      icon: 'log-out'
    }
  ];

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
