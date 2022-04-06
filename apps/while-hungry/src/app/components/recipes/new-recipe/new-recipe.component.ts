import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { Router } from '@angular/router';

// services
import { AppService } from '@wh/core-utils';
import { RecipeService } from '@wh/core-data';
import { UiService } from '@wh/ui';

interface Unit {
  value: string;
  viewValue: string;
}

interface UnitGroup {
  name: string;
  units: Unit[];
}

interface TagOption {
  name: string;
  value: number;
}

@Component({
  selector: 'wh-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    }
  ]
})
export class NewRecipeComponent implements OnInit {
  recipeNameGroup: FormGroup;
  informationGroup: FormGroup;
  ingredientGroup: FormGroup;
  instructionGroup: FormGroup;
  recipeName = '';
  tags: TagOption[] = [];
  ingredients: Record<string, unknown>[] = [];
  instructions: Record<string, unknown>[] = [];
  notes: Record<string, unknown>[] = [];
  recipe: Record<string, unknown> = {};
  pictureFile: File;
  pictureName: string;
  previewPicturePath: string;

  // unit options if user chooses "Metrics"
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

  // unit options if user chooses "US"
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

  // tag options for select
  tagOptions: TagOption[] = [
    { name: "French", value: 1 },
    { name : "Japanese", value: 2 },
    { name : "Italian", value: 3 },
    { name : "Healthy", value: 4 },
    { name : "Vegetarian", value: 5 }
  ]

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private recipeService: RecipeService,
    private uiService: UiService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ["While Hungry", "Recipes", "New Recipe"];

    this.recipeNameGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(3)]],
      description: ['', [Validators.required, Validators.min(3)]]
    })

    this.informationGroup = this.formBuilder.group({
      tag: [''],
      servings: ['', [Validators.required, Validators.min(1) ]], 
      hours: ['', [Validators.required, Validators.min(1) ]], 
      minutes: ['', [Validators.required, Validators.min(1) ]],
      difficulty: ['', [Validators.required ]],
      units: ['', [Validators.required ]],
    })

    this.ingredientGroup = this.formBuilder.group({
      quantity: [''], 
      unit: [''], 
      ingredient: [''], 
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
   * Add a tag to the tags array if it's not already in there and the array is less than 3
   */
  addTag() {
    const tag = this.informationGroup.controls['tag'].value;

    if (tag && !(this.tags.includes(tag)) && (this.tags.length < 3)) {
      // use tag options to fill array
      this.tags.push(this.tagOptions[tag - 1]);
      this.informationGroup.controls['tag'].reset();
    }
  }

  /**
   * Check if the given name is in the list of tags
   * @param {string} name - The name of the tag.
   * @returns The return value is a boolean value.
   */
  checkTag(name: string) {
    return this.tags.some(e => e.name === name)
  }

  removeTag(index: number) {
    if (index === 0) {
      this.tags.shift();
    } else if (index && index > -1 && this.tags.length > 0) {
      this.tags.splice(index, 1);
    }
    console.log(this.tags);
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
        quantity,
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
        categoryId: 4,
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
   * If all of the form groups are valid, return true. Otherwise, return false
   * @returns A boolean value.
   */
  isValidRecipe() {
    if (this.recipeNameGroup.valid && this.informationGroup.valid && this.ingredients.length > 0 && this.instructions.length > 0 && this.tags.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * It takes the hours and minutes from the form and converts it to minutes.
   * @returns The number of minutes.
   */
  formatCookTime() {
    return (this.informationGroup.controls['hours'].value * 60) + this.informationGroup.controls['minutes'].value
  }

  formatRecipe() {
    this.recipe = {
      name: this.recipeNameGroup.controls['name'].value,
      description: this.recipeNameGroup.controls['description'].value,
      authorId: this.appService.getUserId(),
      cookTime: this.formatCookTime(),
      difficulty: this.informationGroup.controls['difficulty'].value,
      serves: this.informationGroup.controls['servings'].value,
      unit: this.informationGroup.controls['units'].value,
      requiredIngredients: this.ingredients,
      recipeInstructions: this.instructions,
      recipeTags: this.formatTags(),
      recipeNotes: this.notes || null,
      picture: this.pictureName || null,
    }

    return this.recipe;
  }

  formatTags() {
    const formatedTags: Record<string, number>[] = [];
    this.tags.forEach(tag => {
      formatedTags.push({
        tagId: tag.value,
      })
    });

    return formatedTags;
  }

  /**
   * Create a recipe and store the picture in the back-end system file
   */
  createRecipe() {
    if (this.isValidRecipe() && this.recipe) {
      this.recipeService.storePicture(this.formatPicture()).subscribe((picture: any) => {
        if (picture) {
          this.pictureName = picture.filename;
          this.formatRecipe();

          this.recipeService.create(this.recipe).subscribe((res: any) => {
            if (res) {
              this.uiService.openAlert('Recipe successfully created')
              this.router.navigate(['recipes', res.id])
            }
          })
        }
      })
    } else {
      this.uiService.openAlert('Your recipe is incomplete, please verify all steps')
    }
  }

  // On picture select
  setPicture(event: any) {
    this.pictureFile = event.target.files[0];

  
    const reader = new FileReader();
    reader.onload = () => {
      this.previewPicturePath = reader.result as string;
    }

    reader.readAsDataURL(this.pictureFile);
  }

  // on picture add
  formatPicture() {
    const formData = new FormData(); 
    formData.append("picture", this.pictureFile, this.pictureFile.name);
  
    return formData;
  }
}
