import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'mf-forms-field-select',
  templateUrl: './field-select.component.html',
  imports: [MatInputModule, MatFormFieldModule],
  styleUrls: ['./field-select.component.scss'],
  standalone: true,
})
export class FieldSelectComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
