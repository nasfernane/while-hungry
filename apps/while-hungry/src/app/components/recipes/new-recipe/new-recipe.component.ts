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
  instructionGroup: FormGroup;
  recipeName = '';
  ingredients: Record<string, unknown>[] = [];
  instructions: Record<string, unknown>[] = [];
  notes: Record<string, unknown>[] = [];
  previewRecipe: Record<string, unknown> = {};

  unitsGroupsMetrics: UnitGroup[] = [
    {
      name: 'General',
      units: [
        {value: 'piece', viewValue: 'piece(s)'},
      ]
    },
    {
      name: 'Weight',
      units: [
        { value: 'g', viewValue: 'g (grams)' },
        { value: 'kg', viewValue: 'kg (kilograms)' },
       
      ],
    },
    {
      name: 'Volume',
      units: [
        { value: 'ml', viewValue: 'ml (mililiters)' },
        { value: 'cl', viewValue: 'cl (centiliters)' },
        { value: 'L', viewValue: 'L (liters)' },
        { value: 'pints', viewValue: 'pint(s)' },
      ], 
    },
  ];

  unitsGroupsUS: UnitGroup[] = [
    {
      name: 'General',
      units: [
        {value: 'piece', viewValue: 'piece(s)'},
      ]
    },
    {
      name: 'Weight',
      units: [
        { value: 'ounces', viewValue: 'ounces' },
        {value: 'pounces', viewValue: 'pounces'},
      ],
    },
    {
      name: 'Volume',
      units: [
        { value: 'tsp', viewValue: 'tsp (teaspoon)' },
        { value: 'tbp', viewValue: 'tbp (tablespoon)' },
        { value: 'cup', viewValue: 'cup' },
        { value: 'pint', viewValue:'pint' },
        { value: 'quart', viewValue: 'quart'},
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
      difficulty: ['', [Validators.required ]],
      units: ['', [Validators.required ]],
    })

    this.ingredientGroup = this.formBuilder.group({
      quantity: ['', [Validators.required, Validators.min(1) ]], 
      unit: ['', [Validators.required, Validators.min(1) ]], 
      ingredient: ['', [Validators.required, Validators.min(1) ]], 
    })

    this.instructionGroup = this.formBuilder.group({
      instructionLabel: ['', [Validators.min(1) ]], 
      instruction: ['', [Validators.required, Validators.min(1) ]],
      noteLabel: ['', [Validators.min(1) ]], 
      note: ['', [Validators.required, Validators.min(1) ]],
      
    })

    // subscribe on recipe name to check if recipes already exist on the website
    this.recipeNameGroup.controls['name'].valueChanges.subscribe(value => {
      this.recipeName = value;
    })
  }

  /**
   * Add an ingredient to the ingredients array
   */
  addIngredient() {
    const quantity = this.ingredientGroup.controls['quantity'].value;
    const unit = this.ingredientGroup.controls['unit'].value;
    const name = this.ingredientGroup.controls['ingredient'].value;

    if (quantity && unit && name) {
      const newIngredient = {
        quantity: String(quantity),
        unit,
        name
      }
  
      this.ingredients.push(newIngredient);
      this.ingredientGroup.reset();
    }
  }

  /**
   * Add an instruction to the list of instructions
   */
  addInstruction() {
    const label = this.instructionGroup.controls['instructionLabel'].value || '';
    const instruction = this.instructionGroup.controls['instruction'].value;

    if (instruction) {
      this.instructions.push({
        label,
        instruction
      })

      this.instructionGroup.reset();
    }
  }

  /**
   * Add a note to the list of notes
   */
  addNote() {
    console.log('add note')
    const label = this.instructionGroup.controls['noteLabel'].value || '';
    const note = this.instructionGroup.controls['note'].value;

    if (note) {
      this.notes.push({
        label,
        note
      })

      this.instructionGroup.reset();
    }
  }

  /**
   * Get the units options based on the units selected in second step
   * @returns The units options for the selected metric.
   */
  getUnitsOptions() {
    const metrics = this.informationGroup.controls['units'].value;

    if (metrics) {
      return metrics === 'metrics' ? this.unitsGroupsMetrics : this.unitsGroupsUS;
    } else {
      return null;
    }
  }

  /**
   * Returns true if the recipe is valid.
   * @returns The return value is true.
   */
  isValidRecipe() {
    return true;
  }

  /**
   * It takes the hours and minutes from the form and converts it to minutes.
   * @returns The number of minutes.
   */
  formatCookTime() {
    return (this.informationGroup.controls['hours'].value * 60) + this.informationGroup.controls['minutes'].value
  }

  formatRecipe() {
    if (this.isValidRecipe()) {
      this.previewRecipe = {
        cookTime: this.formatCookTime(),
        difficulty: this.informationGroup.controls['difficulty'].value,
        serves: this.informationGroup.controls['servings'].value,
        unit: this.informationGroup.controls['units'].value,
        requiredIngredients: this.ingredients,
        recipeInstructions: this.instructions,
        recipeNotes: this.notes || null,
      }
  
      return this.previewRecipe;
    } else {
      return undefined;
    }
    
  }

  createRecipe() {
    console.log('coucou')
  }
}
