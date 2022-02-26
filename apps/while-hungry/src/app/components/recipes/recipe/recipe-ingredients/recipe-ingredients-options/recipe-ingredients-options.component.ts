import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-recipe-ingredients-options',
  templateUrl: './recipe-ingredients-options.component.html',
  styleUrls: ['./recipe-ingredients-options.component.scss']
})
export class RecipeIngredientsOptionsComponent {
  @Input() units: string;
  @Output() unitsEvent = new EventEmitter<string>();
  @Output() scaleEvent = new EventEmitter<number>();
  scale = 1;

  switchUnits(value: string) {
    if (this.units !== value) {
      this.units = value;
      this.unitsEvent.emit(value)
    }
  }

  switchScale(value: number) {
    if (this.scale !== value) {
      this.scale = value;
      this.scaleEvent.emit(value);
    }
  }

}
