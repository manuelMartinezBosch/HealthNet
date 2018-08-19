import { MealDetailsPage } from '../meal-details/meal-details';
import { NutritionProvider } from '../../providers/nutrition/nutrition.provider';
import { Meal } from './../../classes/meal';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from '@ionic-native/date-picker';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  totalKcal = 0;
  totalCH = 0;
  totalPP = 0;
  totalFat = 0;
  date: Date;
  meals: Meal[];

  constructor(private datePicker: DatePicker,
              private nutritionProvider: NutritionProvider,
              public navCtrl: NavController) {      
    this.date = new Date();
    this.getMeals();
    console.log("contruye");
  }

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(MealDetailsPage, {
      id: 1,
      name: "Carl",
      homePage: this
    });
  }
  doStuff(): void {
    this.totalPP = 20;
  }

  getMeals(): void {
    this.nutritionProvider.getMeals().subscribe(meals => {
      this.meals = meals;
      this.meals.forEach(function(meal) {
        meal.show = true;
      });
    });
  }

  openDatePicker(): void {
    this.datePicker.show({
      date: this.date,
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        this.date = date;
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  previousDay(): void {
    this.date.setDate(this.date.getDate()-1);
    // var d = new Date();
    // d.setDate(d.getDate()-5);
  }

  nextDay(): void {
    this.date.setDate(this.date.getDate()+1);
  }

  toggleGroup(meal: Meal): void {
    meal.show = !meal.show;
  }

  isGroupShown(meal: Meal): boolean {
    return meal.show;
  }

  deleteGroup(meal: Meal): void {
    var index = this.meals.indexOf(meal);
    this.meals.splice(index, 1);
  }

}
