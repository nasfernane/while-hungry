import { Component, Input } from '@angular/core';

@Component({
  selector: 'wh-recipe-tags',
  templateUrl: './recipe-tags.component.html',
  styleUrls: ['./recipe-tags.component.scss']
})
export class RecipeTagsComponent {
  @Input() tagCategories: any[];

  activeTags: number[] = [];

  switchTag(tagId: number) {
    if (this.activeTags.includes(tagId)) this.activeTags.splice(this.activeTags.indexOf(tagId), 1);
    else if (!this.activeTags.includes(tagId) && this.activeTags.length < 3) this.activeTags.push(tagId);
  }

}
