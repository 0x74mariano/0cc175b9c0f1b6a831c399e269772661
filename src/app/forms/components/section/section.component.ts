import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FieldInputComponent } from '../field-input/field-input.component';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';

@Component({
  selector: 'mf-forms-section',
  imports: [CommonModule, FieldInputComponent],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
  standalone: true,
})
export class SectionComponent implements OnInit {
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
  @Input() path!: string;
  outputColor: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.currentColor = this.colors.at(this.color % 8)!;
    this.outputColor = this.color + 1;
  }
}
