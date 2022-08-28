import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TestService } from 'src/app/test.service';
import { Objectifs } from '../../Models/objectifs';
import { Evaluation } from 'src/app/Models/evaluation';
@Component({
  selector: 'app-fiche-eval',
  templateUrl: './fiche-eval.component.html',
  styleUrls: ['./fiche-eval.component.scss'],
})
export class FicheEvalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog,
    public service: TestService
  ) {
    this.getObjectifsFromAPI();
    this.getEvalFromAPI();
  }
  objectifs: Objectifs[] = [];
  getObjectifsFromAPI() {
    this.service.getObjectifsByFormation(this.data.id).subscribe(
      (response) => {
        console.log('Les objectifs sont ', response);
        this.objectifs = Object.values(response);
        //this.formation = this.formation[0];
        console.warn(this.objectifs);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  eval: Evaluation[];
  getEvalFromAPI() {
    this.service.getEvalByFormation(this.data.id).subscribe(
      (response) => {
        console.log('Evaluation from API== ', response);
        this.eval = Object.values(response);
        //this.formation = this.formation[0];
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  ngOnInit(): void {
    this.getObjectifsFromAPI();
    this.getEvalFromAPI();
  }
  close() {
    this.dialogRef.closeAll();
  }
}
