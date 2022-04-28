import { Component, AfterViewInit, ViewChild, Output, OnInit, EventEmitter } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { RecipeTagsService } from '@wh/core-data';

@Component({
  selector: 'wh-recipes-overview-filters',
  templateUrl: './recipes-overview-filters.component.html',
  styleUrls: ['./recipes-overview-filters.component.scss']
})
export class RecipesOverviewFiltersComponent implements OnInit, AfterViewInit{
  @Output() updateEvent = new EventEmitter<object>();
  @Output() resetEvent = new EventEmitter<boolean>();
  @ViewChild('ratingSelect') ratingSelect: MatSelect;  
  filtersForm: FormGroup;
  rating = 1;
  tagCategories: any[];

  constructor(
    private formBuilder: FormBuilder,
    private tagsService: RecipeTagsService
  ) { 
    this.filtersForm = formBuilder.group({
      difficulty: new FormControl(''),
      rating: new FormControl(''),
      tags: new FormControl(''),
    })
  }

  ngOnInit() {
    this.tagsService.getRecipeTags().subscribe((tags: any) => {
      this.tagCategories = tags;
    })
  }

  ngAfterViewInit() {
    // subscribe on the select to set the proper value for the triggered option (to display star icons)
    this.ratingSelect.optionSelectionChanges.subscribe(res => {
      this.rating = this.filtersForm.controls['rating'].value;
    });
  }

  // build filters
  filterData() {
    const difficultyFilter = this.filtersForm.controls['difficulty'].value;
    const ratingFilter = this.filtersForm.controls['rating'].value;
    const tagFilter = this.filtersForm.controls['tags'].value;
    const filters: any = {};

    if (difficultyFilter) filters.difficulty = difficultyFilter;
    if (ratingFilter) filters.rating = ratingFilter;
    if (tagFilter) filters.tag = tagFilter;
    
    this.updateEvent.emit(filters);
  }

  resetData() {
    this.resetEvent.emit(true);
  }

}
