import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from 'src/app/forms/components/mf-forms.component';

@Component({
  selector: 'mf-forms-main',
  templateUrl: './main.component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Não Mexer
  styleUrls: ['main.component.scss'],
  imports: [
    FormsComponent,
    CommonModule,
  ],
  providers: [],
})
export class MainComponent{
}
