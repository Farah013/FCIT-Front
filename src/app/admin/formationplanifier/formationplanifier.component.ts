import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
import { AjouteruneformationComponent } from '../ajouteruneformation/ajouteruneformation.component';
import { TestService } from 'src/app/test.service';
import { Formation } from '../../Models/formation';
@Component({
  selector: 'app-formationplanifier',
  templateUrl: './formationplanifier.component.html',
  styleUrls: ['./formationplanifier.component.scss'],
})
export class FormationplanifierComponent implements OnInit {
  constructor(private dialogRef: MatDialog, public service: TestService) {}
  cherche = '';
  ngOnInit(): void {
    this.getAllFormationFromAPI();
  }
  formationList: Formation[] = [];
  getAllFormationFromAPI() {
    this.service.getAllFormation().subscribe(
      (response) => {
        console.log('ALL FORMATIONS ', response);
        this.formationList = Object.values(response);
        console.warn(this.formationList);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }

  public postNewFormation(newFormation) {
    //this.formationList.push(newFormation);
    this.service.postFormation(newFormation);
    this.service.postObjectifs(newFormation);
    this.service.postParticipants(newFormation);
    // window.location.reload();

    console.warn('THIS IS THE number of p', newFormation.NbreParticipants);
    console.warn('THIS IS THE NEW FORMATION', newFormation);
    console.warn('THIS IS THE NEW PARTICIPANTS', newFormation.Participants);
  }
  ajouter() {
    this.dialogRef
      .open(AjouteruneformationComponent, {
        data: this.formationList,
        height: '550px',
        width: '1200px',
      })
      .afterClosed()
      .subscribe((res) => {
        this.service.postFormation(res);
        this.service.postObjectifs(res);
        this.service.postParticipants(res);
        console.log('The new Formation is =', res);
      });
  }
}
