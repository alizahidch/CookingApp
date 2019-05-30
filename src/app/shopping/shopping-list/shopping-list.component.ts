import { Component, OnInit } from '@angular/core';
import{Ingridient} from '../../shared/ingridient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingridient[]=[
  new Ingridient('Mangos',10),
  new Ingridient('Bananas',20),
];
  constructor() { }

  ngOnInit() {
  }
  onIngridientAdded(ingridient:Ingridient){
    this.ingredients.push(ingridient)

  }
  

}
