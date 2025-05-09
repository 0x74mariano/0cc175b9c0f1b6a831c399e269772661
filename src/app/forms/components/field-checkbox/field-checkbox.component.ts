import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mf-forms-field-checkbox',
  templateUrl: './field-checkbox.component.html',
  imports: [MatInputModule, MatFormFieldModule],
  styleUrls: ['./field-checkbox.component.scss'],
  standalone: true,
})
export class FieldCheckboxComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
