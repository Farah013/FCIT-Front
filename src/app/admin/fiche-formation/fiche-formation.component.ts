import { Participant } from './../../Models/participant';
import { Objectifs } from './../../Models/objectifs';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { TestService } from 'src/app/test.service';
@Component({
  selector: 'app-fiche-formation',
  templateUrl: './fiche-formation.component.html',
  styleUrls: ['./fiche-formation.component.scss'],
})
export class FicheFormationComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialog,
    public service: TestService
  ) {
    this.getFormationFromAPI();
  }

  ngOnInit(): void {
    this.getFormationFromAPI();
    this.getParticipantsFromAPI();
    this.getObjectifsFromAPI();
    this.showValues();
  }
  close() {
    this.dialogRef.closeAll();
  }
  formation;
  getFormationFromAPI() {
    console.log('idFormarion==', this.data.id);
    this.service.getFormationById(this.data.id).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formation = Object.values(response);
        this.formation = this.formation[0];
        console.warn('This formation..', this.formation);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
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
  participants: Participant[];
  getParticipantsFromAPI() {
    this.service.getParticipantsByFormation(this.data.id).subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.participants = Object.values(response);
        //this.formation = this.formation[0];
        console.warn(this.participants);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  showValues() {
    // this.document.getElementById("title").value =
  }
}
