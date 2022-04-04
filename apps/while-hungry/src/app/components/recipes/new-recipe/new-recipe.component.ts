import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

// services
import { AppService } from '@wh/core-utils';

interface Unit {
  value: string;
  viewValue: string;
}

interface UnitGroup {
  name: string;
  units: Unit[];
}

@Component({
  selector: 'wh-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {
  recipeNameGroup: FormGroup;
  informationGroup: FormGroup;
  ingredientGroup: FormGroup;
  recipeName = '';
  ingredients: Record<string, unknown>[] = [];

  unitsGroups: UnitGroup[] = [
    {
      name: 'Solids',
      units: [
        {value: 'piece', viewValue: 'piece(s)'},
        {value: 'g', viewValue: 'g (grams)'},
        {value: 'kg', viewValue: 'kg (kilos)'},
        {value: 'ounces', viewValue: 'ounces'},
      ],
    },
    {
      name: 'Liquids',
      units: [
        {value: 'ml', viewValue: 'ml (mililiters)'},
        {value: 'cl', viewValue: 'cl (centiliters)'},
        {value: 'L', viewValue: 'L (liters)'},
        {value: 'pints', viewValue: 'pint(s)'},
      ],
    },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ["While Hungry", "Recipes", "New Recipe"];

    this.recipeNameGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(3)]]
    })

    this.informationGroup = this.formBuilder.group({
      servings: ['', [Validators.required, Validators.min(1) ]], 
      hours: ['', [Validators.required, Validators.min(1) ]], 
      minutes: ['', [Validators.required, Validators.min(1) ]],
      difficulty: ['', [Validators.required ]]
    })

    this.ingredientGroup = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(1) ]], 
      unit: ['', [Validators.required, Validators.min(1) ]], 
      ingredient: ['', [Validators.required, Validators.min(1) ]], 
    })

    // subscribe on recipe name to check if recipes already exist on the website
    this.recipeNameGroup.controls['name'].valueChanges.subscribe(value => {
      this.recipeName = value;
    })
  }

  addIngredient() {
    const quantity = this.ingredientGroup.controls['quantity'].value;
    const unit = this.ingredientGroup.controls['unit'].value;
    const ingredient = this.ingredientGroup.controls['ingredient'].value;

    const newIngredient = {
      quantity: String(quantity),
      unit,
      ingredient
    }

    this.ingredients.push(newIngredient);

    console.log(this.ingredients);
  }
}
