import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  clickSub: any;

  constructor(private localNotifications: LocalNotifications) {}

  simpleNotif() {
    this.localNotifications.schedule({
          id: 1,
          text: 'Single Local Notification',
          data: { secret: 'secret' },
          smallIcon: 'assets/icon/trans.png',
          color: '#00FF00',
          led: { color: '#FF00FF', on: 500, off: 500 },
        });
      }
}
