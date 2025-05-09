import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { FormsFieldModel } from 'src/app/shared/models/forms-field.model';
import { SectionComponent } from '../section/section.component';
import { FieldInputComponent } from '../field-input/field-input.component';
import { FormsRenderService } from 'src/app/shared/services/form-render/form-render-service';
import { FieldSelectComponent } from '../field-select/field-select.component';

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
    FieldSelectComponent
  ],
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit, OnDestroy {
  jsonData: FormsFieldModel[] = [] as FormsFieldModel[];
  expectedJsonOutput: any = {};
  expectedJsonOutputFormatted: string = '';
  form = new FormGroup({
    renderer: new FormControl(''),
  });
  private subscription!: Subscription;
  constructor(private formsRenderService: FormsRenderService) {}

  ngOnInit(): void {
    this.subscription = this.formsRenderService.data$.subscribe((value) => {
      console.log("00000000000000000000000", value)
      this.jsonData = value as FormsFieldModel[];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
