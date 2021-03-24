import { Component } from "@angular/core";


@Component(
  {
    selector: 'app-component-card',
    //template:`<h1> Component card here</h1>`
    templateUrl:'property-card.component.html',
    styleUrls:['property-card.component.css'],
  }
)

export class PropertyCardComponent{

  Property : any = {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":12000
  }
}
