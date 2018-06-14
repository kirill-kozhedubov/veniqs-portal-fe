import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.scss']
})

export class RadiobuttonComponent implements OnInit {

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
