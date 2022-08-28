import { TestService } from 'src/app/test.service';
import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../Models/formateur';
@Component({
  selector: 'app-liste-formateur',
  templateUrl: './liste-formateur.component.html',
  styleUrls: ['./liste-formateur.component.scss'],
})
export class ListeFormateurComponent implements OnInit {
  constructor(private service: TestService) {
    this.refreshFormateurs();
  }

  formateurList: Formateur[] = [];
  page = 1;
  pageSize = 4;
  collectionSize = this.formateurList.length;
  formateurs: Formateur[] = this.formateurList;
  ngOnInit(): void {
    this.getFormateurFromAPI();
    // this.refreshFormateurs();
  }
  getFormateurFromAPI() {
    this.service.getFormateurs().subscribe(
      (response) => {
        console.log('Response from API is ', response);
        this.formateurList = Object.values(response);
        for (let i = 0; i < 4; i++) {
          this.formateurs[i] = this.formateurList[i];
        }
        console.warn(this.formateurList);
      },
      (error) => {
        console.log('Error is ', error);
      }
    );
  }
  //table steup

  refreshFormateurs() {
    this.formateurs = this.formateurList
      .map((formateur, i) => ({
        id: i + 1,
        ...formateur,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
  public postNewFormateur(newFormateur) {
    console.log('newFormateur ===', newFormateur.Name);
    this.service.postFormateur(newFormateur);
  }
  public deleteFormateur(CIN) {
    this.service.deleteFormateur(CIN);
    // window.location.reload();
  }
  public newFormateur: Formateur = new Formateur();
  public getNewName() {
    const input_Name = document.getElementById('name') as HTMLInputElement;
    const name = input_Name?.value;
    this.newFormateur.Name = name;
  }
  public getNewSpeciality() {
    const input_spec = document.getElementById('spec') as HTMLInputElement;
    const spec = input_spec?.value;
    this.newFormateur.Speciality = spec;
  }

  public getNewEmail() {
    const input_email = document.getElementById('email') as HTMLInputElement;
    const email = input_email?.value;
    this.newFormateur.Email = email;
  }

  public updateFormateur(CIN) {
    this.newFormateur.CIN = CIN;
    this.service.updateFormateur(this.newFormateur, CIN);
    //window.location.reload();
  }
}
