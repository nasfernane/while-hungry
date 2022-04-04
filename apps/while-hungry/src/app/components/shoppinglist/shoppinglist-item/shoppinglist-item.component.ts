import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ShoppingListService } from '@wh/core-data';

@Component({
  selector: 'wh-shoppinglist-item',
  templateUrl: './shoppinglist-item.component.html',
  styleUrls: ['./shoppinglist-item.component.scss']
})
export class ShoppinglistItemComponent {
  @Input() list: any;
  @Output() resetEvent = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private service: ShoppingListService,
  ) {}


  removeList(id: string) {
    this.service.remove(id).subscribe((res: any) => {
      if (res) {
        this.resetEvent.emit(true);
      }
    })
  }

  navRecipe(recipeId: string) {
    this.router.navigate(['/recipes', recipeId]);
  }

}
