import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { TestService } from '../test.service';
export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
class participant {
  "name": string;
  "participantid":number;
  "etat": string;
  "dmaj": string;
  "formationid":number;
}


@Component({
  selector: 'app-consultefiche',
  templateUrl: './consultefiche.component.html',
  styleUrls: ['./consultefiche.component.scss']
})
export class ConsulteficheComponent implements OnInit {
  id:any;
  participants:participant[]=[]
  constructor(public testservice:TestService,public route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id');
    this.fetchparticipant();
  }
  displayedColumns = ['participantid', 'name', 'etat', 'dmaj'];
  dataSource = new MatTableDataSource(this.participants);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  fetchparticipant(){
    this.testservice.getParticipant(this.id).subscribe((data:any)=>{
      this.participants=data;
      console.log(data);
      console.log("data received");
    })
  }


}
