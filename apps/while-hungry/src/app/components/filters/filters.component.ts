import { Component, OnInit, Output, EventEmitter, Input, ViewChild, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { RecipeTagsService } from '@wh/core-data';
import { RecipeTagCategory } from '@prisma/client';
import { MatSelect } from '@angular/material/select';
import { RecipeTagLabel } from '@prisma/client';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'wh-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @ViewChild('ratingSelect') ratingSelect: MatSelect;
  @ViewChild('filtersModale') filtersModale: TemplateRef<any>;
  @Output() applyQuicksearchEvent = new EventEmitter<string>();
  @Output() resetFiltersEvent = new EventEmitter<boolean>();
  @Output() updateFiltersEvent = new EventEmitter<object>();
  @Input() type = 'recipe';
  @Input() activeFilters: any;
  dialogRef: MatDialogRef<any>;

  quicksearchGroup: FormGroup;
  filtersGroup: FormGroup;
  tagCategories: any[];
  tags: RecipeTagLabel[] = [];
  updatingTags: RecipeTagLabel[] = [];
  rating = 1;

  constructor(
    private formBuilder: FormBuilder,
    private tagsService: RecipeTagsService,
    private matDialog: MatDialog
  ) {
    this.quicksearchGroup = this.formBuilder.group({
      search: new FormControl(''),
    });

    this.filtersGroup = this.formBuilder.group({
      recipeName: new FormControl(''),
      authorName: new FormControl(''),
      difficulty: new FormControl(''),
      rating: new FormControl(''),
    });

    this.quicksearchGroup.valueChanges.subscribe(value=> {
      if (this.quicksearchGroup.dirty) this.applyQuicksearch(value.search);
      });
  }

  ngOnInit() {
    // get all recipe tag options
    this.tagsService.getRecipeTags().subscribe((tags: RecipeTagCategory[]) => {
      this.tagCategories = tags;
    });
  }

  setActiveFilters(activeFilters = this.activeFilters) {
    if (activeFilters?.recipeName) this.filtersGroup.controls['recipeName'].setValue(activeFilters.recipeName);
    if (activeFilters?.authorName) this.filtersGroup.controls['authorName'].setValue(activeFilters.authorName);
    if (activeFilters?.difficulty) this.filtersGroup.controls['difficulty'].setValue(activeFilters.difficulty);
    if (activeFilters?.rating) this.filtersGroup.controls['rating'].setValue(activeFilters.rating);
    if (activeFilters?.tags) this.tags = activeFilters.tags
  }

  applyQuicksearch(searchValue: string = '') {
    searchValue = searchValue.trim(); // Remove whitespace
    searchValue = searchValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.applyQuicksearchEvent.emit(searchValue);
  }

  openSortOptions() {
    // TODO develop
    console.log('opening sort options')
  }

  openFilterOptions() {
    this.dialogRef = this.matDialog.open(this.filtersModale);
    this.dialogRef.afterOpened().subscribe(() => {
      this.ratingSelect.optionSelectionChanges.subscribe(() => {
        this.rating = this.filtersGroup.controls['rating'].value;
      });
    })
    this.dialogRef.afterClosed().subscribe(() => {
      this.setActiveFilters();
    })
  }

  updateFilters() {
    const recipeNameFilter = this.filtersGroup.controls['recipeName'].value;
    const authorNameFilter = this.filtersGroup.controls['authorName'].value;
    const difficultyFilter = this.filtersGroup.controls['difficulty'].value;
    const ratingFilter = this.filtersGroup.controls['rating'].value;
    const filters: any = {};

    if (recipeNameFilter) filters.recipeName = recipeNameFilter;
    if (authorNameFilter) filters.authorName = authorNameFilter;
    if (difficultyFilter) filters.difficulty = difficultyFilter;
    if (ratingFilter) filters.rating = ratingFilter;
    if (this.updatingTags.length > 0) filters.tags = this.updatingTags;

    this.updateFiltersEvent.emit(filters);
    this.dialogRef.close();
  }

  cancelUpdateFilters() {
    this.dialogRef.close();
  }

  // update tags from event sent within child component wh-recipe-tags 
  updateTags($event: RecipeTagLabel[]) {
    this.updatingTags = $event;
  }
}
