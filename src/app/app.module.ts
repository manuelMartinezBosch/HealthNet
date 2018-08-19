
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule }    from '@angular/common/http';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { MealDetailsPage } from '../pages/meal-details/meal-details';
import { RecipesPage } from '../pages/recipes/recipes'
import { ProfilePage } from '../pages/profile/profile';
import { MorePage } from '../pages/more/more';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatePicker } from '@ionic-native/date-picker';
import { NutritionProvider } from '../providers/nutrition/nutrition.provider';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MealDetailsPage,
    RecipesPage,
    ProfilePage,
    MorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MealDetailsPage,
    RecipesPage,
    ProfilePage,
    MorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NutritionProvider
  ]
})
export class AppModule {}
