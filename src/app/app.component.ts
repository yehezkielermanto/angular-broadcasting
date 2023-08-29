import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';

  ngOnInit() {
    window.Echo.channel('hello-channel').listen('HelloEvent', (e: any) => {
      console.log(e);
    });
  }
}
