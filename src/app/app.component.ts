import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Client';
  message: string = '';

  constructor(private cdr: ChangeDetectorRef){};

  ngOnInit() {
    window.Echo.channel('hello-channel').listen('HelloEvent', (e: any) => {
      this.message = e.message;
      this.cdr.detectChanges();
    });
  }
}
