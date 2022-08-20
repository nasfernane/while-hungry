import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'wh-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Output() applyQuicksearchEvent = new EventEmitter<string>();
  searchGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

  ) {
    this.searchGroup = this.formBuilder.group({
      search: new FormControl(''),
    });

    this.searchGroup.valueChanges.subscribe(value=> {
      if (this.searchGroup.dirty) this.applyQuicksearch(value.search);
      });
  }

  applyQuicksearch(searchValue: string = '') {
    searchValue = searchValue.trim(); // Remove whitespace
    searchValue = searchValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.applyQuicksearchEvent.emit(searchValue);
  }
}
