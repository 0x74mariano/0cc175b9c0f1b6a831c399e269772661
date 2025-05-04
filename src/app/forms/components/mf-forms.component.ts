import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponent } from './example/example.component';
import { GeneratorComponent } from './generator/generator.component';
import { RendererComponent } from './renderer/renderer.component';

@Component({
  selector: 'mf-forms-lib',
  templateUrl: './mf-forms.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ExampleComponent,
    GeneratorComponent,
    RendererComponent
  ],
  styleUrls: ['./mf-forms.component.scss'],
})
export class FormsComponent { 
  constructor(
  ) {}
  ngOnInit(): void {
  };
};