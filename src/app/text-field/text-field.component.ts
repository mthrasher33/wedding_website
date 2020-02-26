import { Component, OnInit, Input } from '@angular/core';
import { TextFieldContent } from './text-field-content';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css']
})

export class TextFieldComponent implements OnInit {
  @Input('content') content: TextFieldContent;

  constructor() { }

  ngOnInit(): void {
  }

}
