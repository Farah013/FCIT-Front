import { FicheEvalComponent } from '../fiche-eval/fiche-eval.component';
import { FicheFormationComponent } from '../fiche-formation/fiche-formation.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formation } from '../../Models/formation';
@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.scss'],
})
export class FormationadminComponent implements OnInit {
  @Input() idFormation: number;
  @Input() titleF: string;
  @Input() dateF: Date;
  @Input() nbreP: number;
  @Input() formateur: string;
  @Input() Eval: number;
  @Input() Done: number;
  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {}
  afficherFiche() {
    this.dialogRef.open(FicheFormationComponent, {
      data: {
        id: this.idFormation,
      },
      height: '650px',
      width: '1250px',
    });
  }
  afficherEval() {
    this.dialogRef.open(FicheEvalComponent, {
      data: {
        id: this.idFormation,
      },
      height: '650px',
      width: '1200px',
    });
  }
}
