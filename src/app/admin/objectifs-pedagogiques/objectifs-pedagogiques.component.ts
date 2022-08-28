import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Objectifs } from '../../Models/objectifs';
@Component({
  selector: 'app-objectifs-pedagogiques',
  templateUrl: './objectifs-pedagogiques.component.html',
  styleUrls: ['./objectifs-pedagogiques.component.scss'],
  exportAs: 'objectifsForm',
})
export class ObjectifsPedagogiquesComponent implements OnInit {
  @Output() getNewFormation: EventEmitter<any> = new EventEmitter();
  @Input() affiche: number;
  @Input() ListeObj: Objectifs[];
  obj: Objectifs = new Objectifs();
  objectif: string;
  constructor() {}
  ngOnInit(): void {}
  objectifFormation: string[] = [];
  public saveObectifs() {
    const input = document.getElementById('objectif') as HTMLInputElement;
    const value = input?.value;
    this.objectifFormation.push(value);
    this.getNewFormation.emit(this.objectifFormation);
  }
  public DeleteObj(obj) {
    for (var i = 0; i < this.objectifFormation.length; i++) {
      if (this.objectifFormation[i] === obj) {
        this.objectifFormation.splice(i, 1);
      }
    }
    this.getNewFormation.emit(this.objectifFormation);
  }
}
