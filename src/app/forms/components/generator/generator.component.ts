import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { FormsRenderService } from 'src/app/shared/services/form-render/form-render-service';

@Component({
  selector: 'mf-forms-generator',
  templateUrl: './generator.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit {
  expectedJsonOutput: any = {};
  expectedJsonOutputFormatted: string = '';
  form = new FormGroup({
    autoResize: new FormControl(''),
  });

  constructor(private formsRenderService: FormsRenderService) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onTextAreaChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    const jsonArray = JSON.parse(value) as FormsFieldModel;
    this.formsRenderService.updateData([jsonArray]);
    this.showJsonForm(jsonArray);
  }

  showJsonForm(jsonArray: FormsFieldModel) {
    this.expectedJsonOutput = this.parseSection(jsonArray);
    if (jsonArray.dataType === 'array') {
      this.updateFormattedJson(this.expectedJsonOutput);
    }
    if (jsonArray.dataType === 'object') {
      this.updateFormattedJson(this.expectedJsonOutput);
    }
  }

  private parseFormField(current: FormsFieldModel): any {
    if (current.fieldType === 'input') {
      return this.parseInputField(current);
    }
    if (current.fieldType === 'select') {
      return this.parseSelectField(current);
    }
    if (current.fieldType === 'section') {
      return this.parseSection(current);
    }
    if (current.fieldType === 'radio') {
      return this.parseRadioField(current);
    }
    if (current.fieldType === 'checkbox') {
      return this.parseCheckboxField(current);
    }
    
  }

  private parseSection(current: FormsFieldModel): any {
    const content = current.content as FormsFieldModel[];
    if (current.dataType === 'array') {
      return this.parseArraySection(content);
    }
    if (current.dataType === 'object') {
      return this.parseObjectSection(content);
    }
  }

  private parseArraySection(content: FormsFieldModel[]): any {
    return content.reduce((previous: any[], current) => {
      if (!current.contract) {
        return this.parseFormField(current);
      }
      let base: any = {};
      base[current.contract!] = this.parseFormField(current);
      previous.push(base);
      return previous;
    }, []);
  }

  private parseObjectSection(content: FormsFieldModel[]): any {
    return content.reduce((previous: any, current) => {
      if (!current.contract) {
        return this.parseFormField(current);
      }
      previous[current.contract!] = this.parseFormField(current);
      return previous;
    }, {});
  }

  private parseInputField(current: FormsFieldModel): any {
    if (current.dataType === 'string') {
      return '';
    }
    if (current.dataType === 'object') {
      return [];
    }
  }

  private parseSelectField(current: FormsFieldModel): any {
    const content = current.content as string[];
    if (current.dataType === 'string') {
      return content.reduce((previous, current, index) => {
        if (index == 0) return `'${current}'`;
        return `${previous} | '${current}'`;
      }, '');
    }
    if (current.dataType === 'array') {
      return content;
    }
  }
  private parseCheckboxField(current: FormsFieldModel): any {
    const content = current.content as string[];
    if (current.dataType === 'array') {
      return content;
    }
  }

  private parseRadioField(current: FormsFieldModel): any {
    if (current.dataType === 'string') {
      return '';
    }
  }

  private updateFormattedJson(dynamicJson: any): void {
    this.expectedJsonOutputFormatted = JSON.stringify(dynamicJson, null, 2);
    console.log(this.expectedJsonOutputFormatted);
  }
}
