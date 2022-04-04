import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

// services
import { ShoppingListService } from '@wh/core-data';
import { AppService } from '@wh/core-utils';
import { UiService } from '@wh/ui';

@Component({
  selector: 'wh-shoppinglist-global',
  templateUrl: './shoppinglist-global.component.html',
  styleUrls: ['./shoppinglist-global.component.scss']
})
export class ShoppinglistGlobalComponent implements OnInit, OnChanges {
  @Input() lists: any;
  @Output() resetEvent = new EventEmitter<boolean>();
  total: Record<string, unknown>[] = [];

  constructor(
    private service: ShoppingListService,
    private appService: AppService,
    private uiService: UiService,
  ) {}

  ngOnInit() {
    this.setData();
  }

  ngOnChanges() {
    console.log('on change')
    this.setData();
  }

  setData() {
    // reset total at each init or change
    this.total = [];
    // then set total if lists exist
    if (this.lists) {
      this.setTotal(this.lists);
    }
  }

  /**
   * It adds the quantities of each food in the shopping list to the total.
   * @param {any[]} lists - an array of shopping lists.
   */
  setTotal(lists: any[]) {
    lists.forEach(list => {
      list.shoppingListItems.forEach((el: Record<string, unknown>) => {
        el['quantity'] = Number(el['quantity']);
        const index = this.total.findIndex(line => line['name'] === el['name']);

        // if this type of food is not yet in total, we add it
        if (index === -1 ) { 
          this.total.push({ name: el['name'], quantity: el['quantity'], unit: el['unit'] });

        // this type of food already in total, we add new quantities and check units
        } else {
          if (el['unit'] === this.total[index]['unit']) {
            this.total[index]['quantity'] = Number(this.total[index]['quantity']) + Number(el['quantity']);
          } else {
            this.total[index]['quantity2'] = Number(el['quantity']);
            this.total[index]['unit2'] = el['unit']
          }
        }
      }); 
    });
  }

  formatQuantities(el: Record<string, unknown>) {
    if (el['unit2']) {
      return `${el['quantity']} ${el['unit']} & ${el['quantity2']} ${el['unit2']}`;
    } else {
      return `${el['quantity']} ${el['unit']}`;
    }
  }

  removeRecipes() {
    this.service.removeAll(this.appService.getUserId()).subscribe((res: any) => {
      if (res && res.res === 'success') {
        this.uiService.openAlert('You wiped out your shopping lists')

        this.resetEvent.emit(true);
      }
    })
  }
}
