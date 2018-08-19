import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-meal-details',
  templateUrl: 'meal-details.html',
})
export class MealDetailsPage {

  name: string;
  id: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('id');
    this.name = navParams.get('name');
    navParams.get('homePage').doStuff();
  }

}
