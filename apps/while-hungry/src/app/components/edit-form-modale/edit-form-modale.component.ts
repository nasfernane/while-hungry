import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Unit {
  value: string;
  viewValue: string;
}

interface UnitGroup {
  name: string;
  units: Unit[];
}

@Component({
  selector: 'wh-edit-form-modale',
  templateUrl: './edit-form-modale.component.html',
  styleUrls: ['./edit-form-modale.component.scss']
})
export class EditFormModaleComponent implements OnInit {
  type: string;
  editGroup: FormGroup;
  updatingValue: any;

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


  constructor(
    private formBuilder: FormBuilder,
    public editDialogRef: MatDialogRef<EditFormModaleComponent>,
    @Inject (MAT_DIALOG_DATA) public dialogData: any
  ){}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.type = this.dialogData.type ? this.dialogData.type : '';
    
    // copy formGroup withouth reference
    const temp = this.dialogData.formGroup.getRawValue();
    this.editGroup = this.formBuilder.group(temp)

    this.updatingValue = this.dialogData.updatingValue;

    // set editGroup with former values
    for (const [key, value] of Object.entries(this.updatingValue)) {
      this.editGroup.controls[key].setValue(value)
    }
  }

  validateEdit() {
    if (this.editGroup.valid) {
      for (const [key, value] of Object.entries(this.updatingValue)) {
        this.updatingValue[key] = this.editGroup.controls[key].value;
      }

      this.editGroup.reset();
      this.editDialogRef.close();
    }
  }

  cancelEdit() {
    this.editDialogRef.close();
  }

  getUnitsOptions() {
    return this.unitsGroupsMetrics;
  }
}
