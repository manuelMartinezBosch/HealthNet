import { Meal } from './../../app/meal';
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
  meals: Meal[];

  constructor(public navCtrl: NavController) {
    this.meals = [
      {
        name: "Comida 1",
        aliments: [{
            name: "alimento 1"
          },
          {
            name: "alimento 2"
          }
        ],
        show: false
      },
      {
        name: "Comida 2",
        aliments: [{
            name: "alimento 3"
          },
          {
            name: "alimento 4"
          }
        ],
        show: false
      },
      {
        name: "Comida 3",
        aliments: [{
            name: "alimento 5"
          },
          {
            name: "alimento 6"
          }
        ],
        show: false
      },
      {
        name: "Comida 4",
        aliments: [{
            name: "alimento 7"
          },
          {
            name: "alimento 8"
          }
        ],
        show: false
      },
      {
        name: "Comida 5",
        aliments: [{
            name: "alimento 9"
          },
          {
            name: "alimento 410"
          }
        ],
        show: false
      }
    ];
  }

  toggleGroup(meal: Meal): void {
    meal.show = !meal.show;
  }

  isGroupShown(meal: Meal): boolean {
    return meal.show;
  }

}
