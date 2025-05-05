import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { FormsRenderService } from 'src/app/shared/services/forms-render/forms-render-service';

@Component({
  selector: 'mf-forms-generator',
  templateUrl: './generator.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  parsedJsonData: FormsFieldModel[] = [];
  expectedJsonOutput: any = {};
  expectedJsonOutputFormatted: string = '';
  private subscription!: Subscription;
  form = new FormGroup({
    autoResize: new FormControl(''),
  });

  constructor(private formsRenderService: FormsRenderService) {}

  ngOnInit(): void {
    this.subscription = this.formsRenderService.dynamicFormData$.subscribe(
      (value) => {
        this.updateFormattedJson(value);
      },
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onTextAreaChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    const jsonArray = JSON.parse(value) as FormsFieldModel[];
    this.formsRenderService.updateData(jsonArray);
    this.showJsonForm(jsonArray);
  }

  showJsonForm(jsonArray: FormsFieldModel[]) {
    this.parsedJsonData = jsonArray;
    this.expectedJsonOutput = {};
    this.parsedJsonData.forEach((item: FormsFieldModel) => {
      if (item.fieldType === 'input') {
        this.expectedJsonOutput[item.contract] = '';
      }
      if (item.fieldType === 'section' && item.dataType === 'array') {
        this.parseArraySection(item);
      }
      if (item.fieldType === 'section' && item.dataType === 'object') {
        this.parseObjectSection(item);
      }
    });
    this.updateFormattedJson(this.expectedJsonOutput);
  }

  private parseArraySection(item: FormsFieldModel): void {
    let newFieldArray: any[] = [];
    this.expectedJsonOutput[item.contract] = newFieldArray;
    item.content?.forEach((subItem: FormsFieldModel) => {
      let arrayField: any = {};
      arrayField[subItem.contract] = '';
      newFieldArray.push(arrayField);
    });
  }

  private parseObjectSection(item: FormsFieldModel): void {
    let newFieldObject: any = {};
    this.expectedJsonOutput[item.contract] = newFieldObject;
    item.content?.forEach((subItem: FormsFieldModel) => {
      newFieldObject[subItem.contract] = '';
    });
  }

  private updateFormattedJson(dynamicJson: object[]): void {
    this.expectedJsonOutputFormatted = JSON.stringify(dynamicJson, null, 2);
  }
}
