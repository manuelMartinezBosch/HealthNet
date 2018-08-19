import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meal } from './../../classes/meal';

@Injectable()
export class NutritionProvider {
  private BaseUrl = "http://localhost/api/nutrition.php";
  constructor(private http: HttpClient) {
  }

  getMeals (): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.BaseUrl)
  }

}
