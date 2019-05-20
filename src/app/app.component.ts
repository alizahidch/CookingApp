import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cookingapp';
loadedFeature;

ngOnInit() {
  this.loadedFeature='recipe';
}
onNavigate(feature:string){
    console.log(feature);
this.loadedFeature=feature;
  }

  displayCounter(count) {
    console.log(count);
    this.loadedFeature=count;
}
}
