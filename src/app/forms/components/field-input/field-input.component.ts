import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { FormsRenderService } from 'src/app/shared/services/forms-render/forms-render-service';

@Component({
  selector: 'mf-forms-field-input',
  templateUrl: './field-input.component.html',
  imports: [MatInputModule, MatFormFieldModule],
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
  @Input() path!: string;
  fieldId!: string;

  constructor(private formsRenderService: FormsRenderService) {}

  ngOnInit(): void {
    console.log('string', this.formsField.contract, this.color);
    this.currentColor = this.colors.at(this.color % 8)!;
    this.fieldId = this.path + '.' + this.formsField.contract;
  }

  onChange(event: Event) {
    let eventData = event.target as HTMLInputElement;
    this.formsRenderService.sendFieldInputEvent(eventData.id, eventData.value)
    console.log(eventData);
  }
}
