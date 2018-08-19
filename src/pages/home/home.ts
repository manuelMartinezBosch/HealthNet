import { NativeStorage } from '@ionic-native/native-storage';
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
  minDate: Date;
  maxDate: Date;
  date: Date;
  meals: Meal[];
  valor: string;

  constructor(private datePicker: DatePicker,
              private nutritionProvider: NutritionProvider,
              public navCtrl: NavController,
            private nativeStorage: NativeStorage) {      
    this.date = new Date();
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setFullYear( this.minDate.getFullYear() - 5);
    this.getMeals();
    this.minDate.setHours(0,0,0,0);
    this.maxDate.setHours(0,0,0,0);
    this.date.setHours(0,0,0,0);
    nativeStorage.getItem('userId').then(
      data => {
        this.valor = data;
      },
      error => {
        this.valor = error;
      }
    )
  }

  imprime(): void {

  }

  pushPage(){
    // push another page onto the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    // this.navCtrl.push(MealDetailsPage, {
    //   id: 1,
    //   name: "Carl",
    //   homePage: this
    // });
    this.nativeStorage.clear();
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
        console.log("MINIMA: " + this.minDate + " MAXIMA: " + this.maxDate);
        if (date >= this.minDate && date <= this.maxDate) {
          this.date = date;
          console.log("fecha dentro" + date);
        } else {
          console.log("fecha fuera rango" + date);
        }
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  previousDay(): void {
    //si tienen mismo día, mes y año entonces no puedo ir hacia atrás
    if (this.date.getDate() != this.minDate.getDate() ||
        this.date.getMonth() != this.minDate.getMonth() ||
        this.date.getFullYear() != this.minDate.getFullYear()) {

      this.date.setDate(this.date.getDate() - 1);
    }
  }

  nextDay(): void {
    if (this.date.getDate() != this.maxDate.getDate() ||
        this.date.getMonth() != this.maxDate.getMonth() ||
        this.date.getFullYear() != this.maxDate.getFullYear()) {

      this.date.setDate(this.date.getDate() + 1);
    }
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
