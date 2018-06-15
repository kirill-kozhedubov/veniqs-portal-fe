import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  constructor() { }

  @Input() mods: string;
  @Input() label: string;
  @Input() type: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() errorMsg: string;
  @Input() isError: boolean = false;

  ngOnInit() {
  }

}
