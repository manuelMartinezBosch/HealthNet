import { NativeStorage } from '@ionic-native/native-storage';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthorizationProvider } from '../../providers/authorization/authorization';
import { SiginPage } from '../sigin/sigin';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  mail = '';
  password = '';
  error: string;

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage, 
    private authorizationProvider: AuthorizationProvider) 
  {

  }

  login(): void {
    this.authorizationProvider.authorize(this.mail, this.password).subscribe(
      (token: string) => {
        console.log('Token: ' + token);
        this.nativeStorage.setItem('userToken', token)
          .then(() => {
            console.log('Full Logged!');
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
        this.error = "Invalid name or password";
      } else {
        this.error = "Server Not Works!";
      }
    });
  }

  signIn(): void {
    this.navCtrl.push(SiginPage);
  }
}
