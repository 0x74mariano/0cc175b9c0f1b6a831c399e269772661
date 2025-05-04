import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { FormsRenderService } from 'src/app/shared/services/forms-render/forms-render-service';
import { SectionComponent } from '../section/section.component';
import { FieldInputComponent } from '../field-input/field-input.component';

@Component({
  selector: 'mf-forms-renderer',
  templateUrl: './renderer.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    SectionComponent,
    FieldInputComponent,
  ],
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit, OnDestroy {
  jsonData: Array<FormsFieldModel> = [] as Array<FormsFieldModel>;
  saidaEsperada: any = {};
  saidaEsperadaString: string = '';
  meuValor: string = 'string';
  form = new FormGroup({
    autoResize: new FormControl(''),
  });
  private subscription!: Subscription;
  data$ = this.formsRenderService.data$;
  constructor(private formsRenderService: FormsRenderService) {}
  ngOnInit(): void {
    this.subscription = this.formsRenderService.data$.subscribe((value) => {
      this.jsonData = value as Array<FormsFieldModel>;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  onChangeDynamicForm(event: Event) {
    let eventData = event.target as HTMLInputElement;
    let data: any = {};
    if (eventData.id.includes('.')) {
      let eventDataParts = eventData.id.split('.');
      eventDataParts.forEach((item: string, i: number) => {
        if (i === eventDataParts.length - 1) {
          data[item] = eventData.value;
        }
        if (i !== 0) {
          data = data[item];
        } else {
          data = this.saidaEsperada;
        }
      });
    } else {
      this.saidaEsperada[eventData.id] = eventData.value;
    }
    this.saidaEsperadaString = JSON.stringify(this.saidaEsperada);
  }
}
