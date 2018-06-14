import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  @Input() label: string;
  @Input() checked: boolean;
  @Input() type: string;
  @Input() hideInput: boolean = false;

  @Output() onChanged = new EventEmitter();

  change() {
    this.onChanged.emit();
  }

  ngOnInit() {
  }

}
