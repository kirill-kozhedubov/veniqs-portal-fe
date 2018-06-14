import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() mods: string;
  @Input() loading: boolean;
  @Input() disabled: boolean;
  @Output() onClick = new EventEmitter();

  click() {
    this.onClick.emit();
  }

  ngOnInit() {
  }

}
