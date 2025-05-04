import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
  form = new FormGroup({
    autoResize: new FormControl(''),
  });

  constructor(
    private formsRenderService: FormsRenderService
  ) {}
  ngOnInit(): void {
  }

  onTextAreaChange(event: Event) {
    const value = (event.target as HTMLTextAreaElement).value;
    const jsonArray = JSON.parse(value) as FormsFieldModel[];
    this.formsRenderService.updateData(jsonArray);
    this.showJsonForm(jsonArray);
  }

  showJsonForm(jsonArray: FormsFieldModel[]) {
    this.parsedJsonData  = jsonArray;
    this.expectedJsonOutput = {};
    this.parsedJsonData.forEach((item: FormsFieldModel) => {
      if (item.tipo_dado === 'string') {
        this.expectedJsonOutput[item.contrato] = '';
      }
      if (item.tipo_dado === 'array') {
        let newFieldArray: any[] = [];
        this.expectedJsonOutput[item.contrato] = newFieldArray;
        item.conteudo?.forEach((subItem: FormsFieldModel) => {
          let arrayField: any = {}
          arrayField[subItem.contrato] = '';
          newFieldArray.push(arrayField);
        });
      }
      if (item.tipo_dado === 'object') {
        let newFieldObjet: any = {};
        this.expectedJsonOutput[item.contrato] = newFieldObjet;
        item.conteudo?.forEach((subItem: FormsFieldModel) => {
          newFieldObjet[subItem.contrato] = '';
        });
      }
    });
    this.expectedJsonOutputFormatted = JSON.stringify(this.expectedJsonOutput, null, 2);
  }
}
