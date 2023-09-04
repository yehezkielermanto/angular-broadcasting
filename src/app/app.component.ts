import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Client';
  message: string = '';
  userId = 1;
  email?: string = '';
  password?: string = '';
  status: boolean = false;

  constructor(
    private cdr: ChangeDetectorRef,
    public userService: UserService
  ) { };

  ngOnInit() {
    // window.Echo.channel('hello-channel').listen('HelloEvent', (e: any) => {
    //   console.log(e.message)
    //   this.message = e.message;
    //   this.cdr.detectChanges();
    // });
  }

  submitForm() {
    let data: User = {
      email: this.email,
      password: this.password
    };
    this.userService.login(data).subscribe((res) => {
      console.log(res);
      window.Echo.private(`hello-private.${this.userId}`).listen('HelloEvent', (e: any) => {
        console.log(e)
      })
    });
  }
}
