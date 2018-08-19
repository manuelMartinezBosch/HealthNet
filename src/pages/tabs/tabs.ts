import { Component } from '@angular/core';
import { RecipesPage } from '../recipes/recipes';
import { MorePage } from '../more/more';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecipesPage;
  tab3Root = ProfilePage;
  tab4Root = MorePage;
  constructor() {

  }
}
