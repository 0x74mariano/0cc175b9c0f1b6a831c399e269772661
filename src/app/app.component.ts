import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ConstantConfig } from './shared/models/constant-config';
import { MainComponent } from './shared/components/main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: ConstantConfig.TAG,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, MainComponent],
  encapsulation: ViewEncapsulation.ShadowDom, // NÃO MEXER !!
})
export class AppComponent {}
