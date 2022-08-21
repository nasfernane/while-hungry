import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { RecipeTagLabel, RecipeTag } from '@prisma/client';

type RecipeTagCategoryWithLabels = {
  id: number
  name: string
  maxActiveTags: number
  RecipeTagLabels: RecipeTagLabel[],
  createdAt: Date
  updatedAt: Date
}

@Component({
  selector: 'wh-recipe-tags',
  templateUrl: './recipe-tags.component.html',
  styleUrls: ['./recipe-tags.component.scss']
})
export class RecipeTagsComponent implements OnChanges {
  @Input() tagCategories: RecipeTagCategoryWithLabels[];
  @Input() oldTags: any[] = [];
  @Output() activeTagsEvent = new EventEmitter<RecipeTagLabel[]>()
  activeTags: RecipeTagLabel[] = [];

  ngOnChanges() {
    if (this.oldTags && this.tagCategories) {
      for (const category of this.tagCategories) {
        for (const tag of category.RecipeTagLabels) {
          for (const oldTag of this.oldTags) if (tag.id === oldTag.id) this.activeTags.push(tag);
        }
      }
    }
  }

  switchTag(tag: RecipeTagLabel) {
    if (this.activeTags.includes(tag)) this.activeTags.splice(this.activeTags.indexOf(tag), 1);
    else if (!this.activeTags.includes(tag) && this.activeTags.length < 3) {
      const categoryActiveTags = this.activeTags.filter(obj => obj.categoryId === tag.categoryId)

      if (categoryActiveTags && (categoryActiveTags.length == this.tagCategories[tag.categoryId - 1].maxActiveTags)) return;
      else this.activeTags.push(tag);
    }
    this.activeTagsEvent.emit(this.activeTags);
  }
}
