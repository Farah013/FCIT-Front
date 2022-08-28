import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';
class users{
  "id":number;
  "mail":string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
user:users[]=[];

constructor(private TestService:TestService ){
}
ngOnInit(): void {

}

  title = 'login';
  name='Ines Riahi'
  role="formateur"
}
