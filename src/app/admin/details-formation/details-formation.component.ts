import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Formation } from '../../Models/formation';
@Component({
  selector: 'app-details-formation',
  templateUrl: './details-formation.component.html',
  styleUrls: ['./details-formation.component.scss'],
})
export class DetailsFormationComponent implements OnInit {
  @Input() affiche: number;
  @Input() DateDeb: Date;
  @Input() DateFin: Date;
  @Input() Lieu: string;
  @Input() Mode: string;
  @Input() Formateur: string;
  @Output() getNewDetails: EventEmitter<any> = new EventEmitter();
  fDetails: Formation = new Formation();
  constructor() {}

  ngOnInit(): void {}
  public saveDetails() {
    const inputDD = document.getElementById('dateDeb') as HTMLInputElement;
    const dateD = inputDD?.value;

    const inputDF = document.getElementById('dateFin') as HTMLInputElement;
    const dateF = inputDF?.value;

    const inputM = document.getElementById('mode') as HTMLInputElement;
    const Mode = inputM?.value;

    const inputL = document.getElementById('lieu') as HTMLInputElement;
    const Lieu = inputL?.value;

    const inputF = document.getElementById('formateur') as HTMLInputElement;
    const formateur = inputF?.value;

    this.getNewDetails.emit({ dateD, dateF, Mode, Lieu, formateur });
  }
}
