import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meal } from './../../classes/meal';

@Injectable()
export class NutritionProvider {
  private BaseUrl = "http://localhost/api/GetMeals.php";
  constructor(private http: HttpClient) {
  }

  getMeals (userId: number, mealsDay: Date): Observable<Meal[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<Meal[]>(
      this.BaseUrl, 
      { "userId": userId,
        "mealsDay": mealsDay.getFullYear() + "-" + (mealsDay.getMonth() + 1) + "-" + mealsDay.getDate()
      }, 
      httpOptions);
  }

}
