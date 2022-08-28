import { Component, OnInit } from '@angular/core';
import { Formation } from '../../Models/formation';
import { TestService } from 'src/app/test.service';
import {
  MatDialog,
  MatDialogClose,
  MatDialogModule,
} from '@angular/material/dialog';
@Component({
  selector: 'app-formationpassee',
  templateUrl: './formationpassee.component.html',
  styleUrls: ['./formationpassee.component.scss'],
})
export class FormationpasseeComponent implements OnInit {
  constructor(private dialogRef: MatDialog, public service: TestService) {}

  ngOnInit(): void {
    this.getAllFormationFromAPI();
  }
  cherche = '';
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
}
