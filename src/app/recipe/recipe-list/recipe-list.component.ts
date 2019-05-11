import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[
  new Recipe('Chicken Kentukki','thi is a burger recipe','https://www.kfc.com.au/sites/default/files/alohadata/images/products/Kentucky_Burger_web_hero.jpg'),
  new Recipe('Zinger','this is a zinger burger','https://www.kfc.com.au/sites/default/files/alohadata/images/products/Kentucky_Burger_web_hero.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
