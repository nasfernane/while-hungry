import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RecipeTagLabel } from '@prisma/client';

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
export class RecipeTagsComponent {
  @Input() tagCategories: RecipeTagCategoryWithLabels[];
  @Output() activeTagsEvent = new EventEmitter<RecipeTagLabel[]>()

  activeTags: RecipeTagLabel[] = [];

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
