import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FieldInputComponent } from '../field-input/field-input.component';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { FieldSelectComponent } from '../field-select/field-select.component';
import { FieldRadioComponent } from '../field-radio/field-radio.component';
import { FieldCheckboxComponent } from '../field-checkbox/field-checkbox.component';


@Component({
  selector: 'mf-forms-section',
  imports: [CommonModule, FieldInputComponent, SectionComponent, FieldSelectComponent, FieldCheckboxComponent, FieldRadioComponent],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  standalone: true,
})
export class SectionComponent implements OnInit {
  @Input() formsField!: FormsFieldModel;
  @Input() path!: string;
  fieldId!: string;

  constructor() {}

  ngOnInit(): void {
      this.fieldId = this.path + '.' + this.formsField.contract;
      console.log('section field', this.formsField, this.fieldId)
  }
}
