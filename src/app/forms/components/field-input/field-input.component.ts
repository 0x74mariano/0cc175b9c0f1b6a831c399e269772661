import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';

@Component({
  selector: 'mf-forms-field-input',
  templateUrl: './field-input.component.html',
  imports: [MatInputModule, MatFormFieldModule],
  styleUrls: ['./field-input.component.scss'],
  standalone: true,
})
export class FieldInputComponent implements OnInit {
  @Input() formsField!: FormsFieldModel;
  @Input() path!: string;
  fieldId!: string;

  constructor() {}

  ngOnInit(): void {
    this.fieldId = this.path + '.' + this.formsField.contract;
  }
}
