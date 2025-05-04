import { Component, Input, OnInit } from '@angular/core';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';

@Component({
  selector: 'mf-forms-field-input',
  templateUrl: './field-input.component.html',
  styleUrls: ['./field-input.component.scss'],
  standalone: true,
})
export class FieldInputComponent implements OnInit {
  private colors: string[] = [
    '#ffadad',
    '#ffd6a5',
    '#fdffb6',
    '#caffbf',
    '#9bf6ff',
    '#a0c4ff',
    '#bdb2ff',
    '#ffc6ff',
  ];
  currentColor: string = 'white';
  @Input() formsField!: FormsFieldModel;
  @Input() color!: number;
  constructor() {}
  ngOnInit(): void {
    console.log('string', this.formsField.contrato, this.color)
    this.currentColor = this.colors.at(this.color % 8)!;
  }
}
