import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
  title = 'Client';
  email?: string = '';
  password?: string = '';
  status: boolean = false;

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
      password: this.password,
      access_token: ''
    };
    
    this.userService.login(data).subscribe((res) => {
      sessionStorage.setItem('token', res.access_token)
      window.Echo.options.auth.headers.Authorization = `Bearer ${res?.access_token}`;
      this.router.navigate([`/dashboard/${res?.id}`]);
    });
  }
}

