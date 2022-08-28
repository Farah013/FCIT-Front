import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  lvl = 1;
  @Input() niveau: number;
  constructor() {}

  ngOnInit(): void {}
  @Output() public newEvaluation = new EventEmitter();
}
