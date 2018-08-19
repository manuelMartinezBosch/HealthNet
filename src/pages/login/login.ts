import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
    
  }

  doStuff(): void {
    this.nativeStorage.setItem('userId', 1).then(() => {
        console.log('Full Logged!');
        this.navCtrl.push(TabsPage, {}, {
          animate: false
        }).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(0, index);
        });
      },
      error => console.error('Error on Loggin', error)
    );
  }


}
