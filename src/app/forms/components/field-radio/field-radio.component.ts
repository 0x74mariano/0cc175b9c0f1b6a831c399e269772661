import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mf-forms-field-radio',
  templateUrl: './field-radio.component.html',
  imports: [MatInputModule, MatFormFieldModule],
  styleUrls: ['./field-radio.component.scss'],
  standalone: true,
})
export class FieldRadioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
