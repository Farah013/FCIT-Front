import { Component, OnInit } from '@angular/core';
import { TestService } from "../test.service";
import { ActivatedRoute } from '@angular/router';
 class formation {
  "done": boolean;
  "title":string;
  "date": string;
  "nombreparticipant": number;
  "formationid":number;
}


@Component({
  selector: 'app-mesformations',
  templateUrl: './mesformations.component.html',
  styleUrls: ['./mesformations.component.scss']
})
export class MesformationsComponent implements OnInit {
 public cherche="";
  formations:formation[]=[];

constructor(private TestService:TestService,private route:ActivatedRoute ){
}
ngOnInit(): void {
  this.fetchUsers();
}

fetchUsers(){
  this.TestService.getFormation().subscribe((data:any)=>{
    console.log(data);
    this.formations=data;
    console.log("data received succesfullly");
  })
}
 /** formations:formation[]=[
    {"done":false ,"title": "Les bases de l'info1" , "dates":"12 mars 1999" , "nombrep":12,"eval":false },
    {  "done":true ,"title": "Les bases de l'info2" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info3" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info4" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {"done":false ,"title": "Les bases de l'info1" , "dates":"12 mars 1999" , "nombrep":12,"eval":false },
    {  "done":true ,"title": "Les bases de l'info2" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info3" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false },
    {  "done":true ,"title": "Les bases de l'info4" , "dates":"12 mars 1999" , "nombrep":12 ,"eval":false }
  ]
**/
display(){
  if (this.cherche===""){
    this.fetchUsers();
  }else{
    
  }
}
}
