import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '@wh/core-data';

import { ShoppingList } from '@prisma/client';
import { AppService } from '@wh/core-utils';

@Component({
  selector: 'wh-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ShoppinglistComponent implements OnInit {
  shoppingLists: ShoppingList[];

  constructor(
    private appService: AppService,
    private service: ShoppingListService
  ) { }

  ngOnInit(): void {
    this.appService.breadcrumb = ['While Hungry', 'Shopping List']
    this.getShoppingList()
  }

  getShoppingList() {
    this.service.findAll(this.appService.getUserId()).subscribe((data: any) => {
      if (data && data.length > 0) {
        this.shoppingLists = data;
      } else {
        this.shoppingLists = [];
      }
    })
  }

}
