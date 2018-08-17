import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalKcal = 0;
  totalCH = 0;
  totalPP = 0;
  totalFat = 0;

  constructor(public navCtrl: NavController) {

  }

}
