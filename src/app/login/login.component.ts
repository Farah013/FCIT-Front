import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestService } from '../test.service';
import { Users } from '../Models/Users';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;
  login = '';
  password = '';
  users: Users[] = [];
  constructor(
    public test: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    //this.getallUsers();
  }
  /* getallUsers(){
    this.test.getUsers().subscribe((data:any)=>{
      console.log(data)
      this.users=data;
    })
  }*/

  getUsersByEmail() {
    this.test.getUserByEmail(this.login).subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }
  logit() {
    console.log(this.login);
    let role = '';
    let trouve = false;
    this.users.forEach((user) => {
      console.log('saluet');
      if (user.Email === this.login) {
        if (user.Password === this.password) {
          trouve = true;
          role = user.Type;
        }
      }
    });

    if (trouve) {
      console.log('welcome ' + this.login);
      if (role === 'admin') {
        this.router.navigate(['admin', this.users[0]], {
          relativeTo: this.route,
        });
      } else if (role === 'formateur') {
        this.router.navigate(['formateur'], { relativeTo: this.route });
      }
    }
  }
}
