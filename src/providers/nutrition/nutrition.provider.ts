import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meal } from './../../classes/meal';

@Injectable()
export class NutritionProvider {
  private BaseUrl = "https://a1ca22ef.ngrok.io/api/";
  constructor(private http: HttpClient) {
  }

  getMeals (userId: number, mealsDay: Date): Observable<Meal[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Meal[]>(
      this.BaseUrl + "GetMeals", 
      { "userId": userId,
        "mealsDay": mealsDay.getFullYear() + "-" + (mealsDay.getMonth() + 1) + "-" + mealsDay.getDate()
      }, 
      httpOptions);
  }

}
