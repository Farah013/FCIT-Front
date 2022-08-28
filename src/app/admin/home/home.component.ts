import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../Models/Users';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Input() user: Users;
  constructor() {}

  ngOnInit(): void {}
}
