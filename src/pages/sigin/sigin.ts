import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { NativeStorage } from '@ionic-native/native-storage';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-sigin',
  templateUrl: 'sigin.html',
})
export class SiginPage {

  mail = "";
  password = "";
  error: string;

  constructor(public navCtrl: NavController, private userProvider: UserProvider, private nativeStorage: NativeStorage) {

  }

  signIn(): void {
    if(this.mail == "" || this.password == "") {
      this.error = "Any field is empty"
    } else {
      this.userProvider.create(this.mail, this.password).subscribe(
        (token: string) => {
          console.log('Token: ' + token);
          this.nativeStorage.setItem('userToken', token)
            .then(() => {
              console.log('Full SignIn!');
              this.navCtrl.push(TabsPage)
              .then(() => {
                const index = this.navCtrl.getActive().index;
                this.navCtrl.remove(0, index);
              },
              (error) => {
                console.error('Error with navCtrl: ', error);
                this.error = "Error navCtrl";
              });
            },
            (error) => {
              console.error('Error with native storage Set item: ', error);
              this.error = "Error Native Storage";
            });
      },
      (error) => {
        console.error('Error in authorization provider: ' + error);
        if(error == 204) {
          this.error = "User mail already exists";
        } else {
          this.error = "Server Not Works!";
        }
      });
    }
  }
}
