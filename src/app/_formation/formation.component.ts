import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
})
export class FormationComponent implements OnInit {
  @Input()
  done = true;
  @Input()
  dates = 'dorne';
  @Input()
  nombrep = 0;
  @Input()
  title = 'fd';
  @Input()
  eval = false;
  @Input()
  evaluated = '0';
  @Input()
  id = 0;
  @Input()
  nombreval = 0;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private TestService: TestService
  ) {}

  ngOnInit(): void {}
  goToEval() {
    this.router.navigate(['evaluation', this.id], { relativeTo: this.route });
  }
  goToConsulte() {
    this.router.navigate(['consulter', this.id], { relativeTo: this.route });
  }
}
