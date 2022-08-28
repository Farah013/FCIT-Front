import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DoneComponent } from '../done/done.component';
import { ProfileformateurComponent } from '../_profileformateur/profileformateur.component';
import { TestService } from '../test.service';
import { CdkAriaLive } from '@angular/cdk/a11y';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit,AfterViewInit {
  
  public inputcp="";
  public inputpa="";
  constructor(private dialogRef: MatDialogRef<PopUpComponent>,private dialogRef2:MatDialog,@Inject(MAT_DIALOG_DATA) public data:any,public Testservice:TestService) { }

  ngOnInit(): void {
    console.log(this.inputcp)
  }
  ngAfterViewInit():void{
  
  }
  
  list=["comprondre le principe de la POO","maitriser la définition d'une classe","maitrise le concept d'objet","connaitre le principe de l'encapsulation","savoir manipuler les méthodes"]
 
  public Evaluer(){
    this.Testservice.Evaluer(this.data.id).subscribe(()=>{
      console.log('Evaluation done');
    })
  }
  
  closeDialog(){
    console.log(this.inputcp)
    if((this.inputcp!=="")&&(this.inputpa!=="")){
      this.Evaluer();
      this.dialogRef.close();
      this.dialogRef2.open(DoneComponent);
    }
  
  }

}
