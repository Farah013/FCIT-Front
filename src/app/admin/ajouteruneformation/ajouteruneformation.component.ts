import { SaveConfirmationComponent } from '../save-confirmation/save-confirmation.component';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { Formation } from '../../Models/formation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
@Component({
  selector: 'app-ajouteruneformation',
  templateUrl: './ajouteruneformation.component.html',
  styleUrls: ['./ajouteruneformation.component.scss'],
})
export class AjouteruneformationComponent implements OnInit {
  @Input() formationList: Formation[];
  @Output() postNewFormation: EventEmitter<any> = new EventEmitter();
  public formation: Formation = new Formation();
  constructor(
    private modalService: NgbModal,
    private dialogRef: MatDialog,
    private dialogRefData: MatDialogRef<AjouteruneformationComponent>
  ) {}
  closeResult = '';
  ngOnInit(): void {}
  public newFormation: Formation = new Formation();
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  open(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  public cleanForm() {
    this.newFormation = new Formation();
  }
  public getNewFormation(objectifFormation) {
    this.newFormation.Objectifs = [];
    this.newFormation.Objectifs = objectifFormation;
    //console.warn(this.newFormation);
  }
  public getNewDetails(fDetails) {
    //this.newFormation = new Formation();
    this.newFormation.Lieu = fDetails.Lieu;
    this.newFormation.Mode = fDetails.Mode;
    this.newFormation.Formateur = fDetails.formateur;
    this.newFormation.DateDeb = fDetails.dateD;
    this.newFormation.DateFin = fDetails.dateF;
    // console.warn(this.newFormation);
  }
  var1 = 0;
  public getParticipantsList(participantsList) {
    this.var1 = Object.values(participantsList).length;
    this.newFormation.NbreParticipants = Object.keys(participantsList).length;
    this.newFormation.Participants = participantsList;
  }
  public getNewTitle() {
    const input_title = document.getElementById('title') as HTMLInputElement;
    const title = input_title?.value;
    this.newFormation.Titre = title;
  }
  public saveFormation() {
    //this.newFormation.NbreParticipants = 10;
    this.newFormation.idFormation = Math.floor(Math.random() * 100 + 1);
    this.newFormation.Eval = 0;
    console.log('New Formation==', this.newFormation);
    // this.postNewFormation.emit(this.newFormation);
    this.dialogRefData.close(this.newFormation);
  }
  public closeSave() {
    window.location.reload();
  }
  openSave() {
    this.dialogRef
      .open(SaveConfirmationComponent, {
        data: this.formationList,
      })
      .afterClosed()
      .subscribe((r) => {
        this.closeSave();
      });
  }
  close() {
    this.dialogRef.closeAll();
  }
}
