import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

// services
import { AppService } from '@wh/core-utils';
import { RecipeService, RecipeTagsService } from '@wh/core-data';
import { UiService } from '@wh/ui';

// prisma schema
import { RecipeTagCategory, RecipeTagLabel } from '@prisma/client';
import { EditFormModaleComponent } from '../../../edit-form-modale/edit-form-modale.component';

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
  styleUrls: ['./new-recipe.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class NewRecipeComponent implements OnInit {
  recipeNameGroup: FormGroup;
  informationGroup: FormGroup;
  ingredientGroup: FormGroup;
  editIngredientGroup: FormGroup;
  instructionGroup: FormGroup;
  noteGroup: FormGroup;
  recipeName = '';
  tags: RecipeTagLabel[] = [];
  ingredients: Record<string, unknown>[] = [];
  instructions: Record<string, unknown>[] = [];
  notes: Record<string, unknown>[] = [];
  recipe: Record<string, unknown> = {};
  pictureFile: File;
  pictureName: string;
  previewPicturePath: string;

  editingIndex: number | null = null;
  editingType: string | null = null;

  editDialogRef: any;

  // unit options if user chooses "Metrics"
  unitsGroupsMetrics: UnitGroup[] = [
    {
      name: 'General',
      units: [{ value: 'piece', viewValue: 'piece(s)' }],
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
      units: [{ value: 'piece', viewValue: 'piece(s)' }],
    },
    {
      name: 'Weight',
      units: [
        { value: 'ounces', viewValue: 'ounces' },
        { value: 'pounces', viewValue: 'pounces' },
      ],
    },
    {
      name: 'Volume',
      units: [
        { value: 'tsp', viewValue: 'tsp (teaspoon)' },
        { value: 'tbp', viewValue: 'tbp (tablespoon)' },
        { value: 'cup', viewValue: 'cup' },
        { value: 'pint', viewValue: 'pint' },
        { value: 'quart', viewValue: 'quart' },
      ],
    },
  ];

  // tag options for select
  tagCategories: any[];

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    private recipeService: RecipeService,
    private uiService: UiService,
    private router: Router,
    private tagsService: RecipeTagsService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Recipes', 'New Recipe'];

    this.recipeNameGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]],
    });

    this.informationGroup = this.formBuilder.group({
      tag: ['',],
      servings: [4, [Validators.required, Validators.min(1), Validators.required, Validators.max(12)]],
      hours: [0, [Validators.required, Validators.min(0)]],
      minutes: [0, [Validators.required, Validators.min(0)]],
      difficulty: ['Easy', [Validators.required]],
      units: ['metrics', [Validators.required]],
    }, { validator: this.cookTimeValidator });


    this.ingredientGroup = this.formBuilder.group({
      quantity: [''],
      unit: [''],
      name: [''],
    });

    this.instructionGroup = this.formBuilder.group({
      label: ['', [Validators.min(1)]],
      instruction: ['', [Validators.required, Validators.min(1)]],
      noteLabel: ['', [Validators.min(1)]],
      note: ['', [Validators.required, Validators.min(1)]],
    });

    this.noteGroup = this.formBuilder.group({
      label: ['', [Validators.min(1)]],
      note: ['', [Validators.required, Validators.min(1)]],
    });


    // subscribe on recipe name to check if recipes already exist on the website
    this.recipeNameGroup.controls['name'].valueChanges.subscribe((value) => {
      this.recipeName = value;
    });

    // get all recipe tag options
    this.tagsService.getRecipeTags().subscribe((tags: RecipeTagCategory[]) => {
      this.tagCategories = tags;
    });

  }

  cookTimeValidator(group: FormGroup) {
    // get input values
    const hours = group.controls['hours'].value
    const minutes = group.controls['minutes'].value;
    // get sum in minutes
    const sum = (hours * 60) + minutes;
    // validates if cooktime is superior to 5 mins and inferior to 48h
    return (sum > 5 && sum < 2880) ? true : false;
  }


  /**
   * Add a tag to the tags array if it's not already in there and the array is less than 3
   */
  addTag() {
    const tag = this.informationGroup.controls['tag'].value;

    if (tag && !this.tags.includes(tag) && this.tags.length < 3) {
      // use tag options to fill array
      this.tags.push(tag);
      this.informationGroup.controls['tag'].reset();
    }
  }

  /**
   * Check if the given name is in the list of tags
   * @param {string} name - The name of the tag.
   * @returns The return value is a boolean value.
   */
  checkTag(name: string) {
    return this.tags.some((e) => e.name === name);
  }

  removeTag(index: number) {
    if (index === 0) {
      this.tags.shift();
    } else if (index && index > -1 && this.tags.length > 0) {
      this.tags.splice(index, 1);
    }
  }

  /**
   * Add an ingredient to the ingredients array
   */
  addIngredient() {
    const quantity = this.ingredientGroup.controls['quantity'].value;
    const unit = this.ingredientGroup.controls['unit'].value;
    const name = this.ingredientGroup.controls['name'].value;

    if (quantity && unit && name) {
      const newIngredient = {
        quantity,
        unit,
        name,
      };

      this.ingredients.push(newIngredient);
      this.ingredientGroup.reset();
    }
  }

  /**
   * update ingredients from the ingredients preview event
   * @param {any[]} ingredients - any[]
   */
  updateIngredients(ingredients: any[]) {
    this.ingredients = ingredients;
  }

  // generic function to edit any kind of value
  editValue(index: number, type: string) {
    this.editingIndex = index;
    this.editingType = type;
    let updatingValue;
    let formGroup;

    if (type === 'ingredient') {
      updatingValue = this.ingredients[index];
      formGroup = this.ingredientGroup;
    } else if (type === 'instruction') {
      updatingValue = this.instructions[index];
      formGroup = this.instructionGroup;
    } else if (type === 'note') {
      updatingValue = this.notes[index];
      formGroup = this.noteGroup;
    }

    if (this.editingIndex !== null) {
      this.editDialogRef = this.matDialog.open(EditFormModaleComponent, {
        panelClass: 'form80',
        data: {
          type,
          updatingValue,
          formGroup,
        }
      });

      this.editDialogRef.disableClose = true;

      this.editDialogRef.afterClosed().subscribe(() => {
        this.editingIndex = null;
        this.editingType = null;
      })
    }
  }

  // generic function to remove any kind of value
  removeValue(index: number, type: string) {
    if (type === 'ingredient') {
      this.ingredients.splice(index, 1);
    } else if (type === 'instruction') {
      this.instructions.splice(index, 1);
    } else if (type === 'note') {
      this.notes.splice(index, 1);
    }
  }

  /**
   * Add an instruction to the list of instructions
   */
  addInstruction() {
    const label =
      this.instructionGroup.controls['label'].value || '';
    const instruction = this.instructionGroup.controls['instruction'].value;

    if (instruction) {
      this.instructions.push({
        label,
        instruction,
      });

      this.instructionGroup.controls['instruction'].reset();
      this.instructionGroup.controls['label'].reset();
    }
  }

  /**
   * Add a note to the list of notes
   */
  addNote() {
    const label = this.noteGroup.controls['label'].value || '';
    const note = this.noteGroup.controls['note'].value;

    if (note) {
      this.notes.push({
        label,
        note,
      });

      this.noteGroup.controls['note'].reset();
      this.noteGroup.controls['label'].reset();
    }
  }

  /**
   * Get the units options based on the units selected in second step
   * @returns The units options for the selected metric.
   */
  getUnitsOptions() {
    const metrics = this.informationGroup.controls['units'].value;

    if (metrics) {
      return metrics === 'metrics'
        ? this.unitsGroupsMetrics
        : this.unitsGroupsUS;
    } else {
      return null;
    }
  }

  /**
   * If all of the form groups are valid, return true. Otherwise, return false
   * @returns A boolean value.
   */
  isValidRecipe() {
    if (
      this.recipeNameGroup.valid &&
      this.informationGroup.valid &&
      this.ingredients.length > 0 &&
      this.instructions.length > 0 &&
      this.tags.length > 0
    ) {
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
    return (
      this.informationGroup.controls['hours'].value * 60 +
      this.informationGroup.controls['minutes'].value
    );
  }

  /**
   * This function formats the recipe object to be sent to the server
   * @returns The recipe object.
   */
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
    };

    return this.recipe;
  }

  /**
   * It takes the tags array and formats it into a format that the API expects.
   * @returns An array of objects with the tagId property.
   */
  formatTags() {
    const formatedTags: Record<string, number>[] = [];
    this.tags.forEach((tag) => {
      formatedTags.push({
        tagId: tag.id,
      });
    });

    return formatedTags;
  }

  /**
   * Create a recipe and store the picture in the back-end system file
   */
  createRecipe() {
    if (this.isValidRecipe() && this.recipe) {
      this.recipeService
        .storePicture(this.formatPicture())
        .subscribe((picture: any) => {
          if (picture) {
            this.pictureName = picture.filename;
            this.formatRecipe();

            this.recipeService.create(this.recipe).subscribe((res: any) => {
              if (res) {
                this.uiService.openAlert('Recipe successfully created');
                this.router.navigate(['recipes', res.id]);
              }
            });
          }
        });
    } else {
      this.uiService.openAlert(
        'Your recipe is incomplete, please verify all steps'
      );
    }
  }

  /**
   * It sets the pictureFile property to the file selected by the user and setup file preview.
   * @param {any} event - any
   */
  setPicture(event: any) {
    this.pictureFile = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.previewPicturePath = reader.result as string;
    };

    reader.readAsDataURL(this.pictureFile);
  }

  // on picture add
  formatPicture() {
    const formData = new FormData();
    formData.append('picture', this.pictureFile, this.pictureFile.name);

    return formData;
  }
}
