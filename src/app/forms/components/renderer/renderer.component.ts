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
  jsonData: FormsFieldModel[] = [] as FormsFieldModel[];
  expectedJsonOutput: any = {};
  expectedJsonOutputFormatted: string = '';
  form = new FormGroup({
    autoResize: new FormControl(''),
  });
  private subscription!: Subscription;
  constructor(private formsRenderService: FormsRenderService) {}

  ngOnInit(): void {
    this.subscription = this.formsRenderService.data$.subscribe((value) => {
      this.jsonData = value as FormsFieldModel[];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
