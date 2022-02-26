import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wh-recipe-ingredients-options',
  templateUrl: './recipe-ingredients-options.component.html',
  styleUrls: ['./recipe-ingredients-options.component.scss']
})
export class RecipeIngredientsOptionsComponent {
  @Input() units: string;
  scale = 1;

  switchUnits(value: string) {
    this.units = value;
  }

  switchScale(value: number) {
    this.scale = value;
    console.log(value);
  }

}
