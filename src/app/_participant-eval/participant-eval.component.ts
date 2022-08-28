import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-participant-eval',
  templateUrl: './participant-eval.component.html',
  styleUrls: ['./participant-eval.component.scss']
})
export class ParticipantEvalComponent implements OnInit {
  @Input()
  name="foulen fouleni";
  @Input() 
  identifiant=15252524;
  @Input() 
  etat="évaluer";
  @Input()  
  dmaj="-";

  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
    this.dialogRef.open(PopUpComponent,{data:{
      name:this.name,
      etat:this.etat,
      id:this.identifiant
    }});
    console.log("ok")
  }

}
