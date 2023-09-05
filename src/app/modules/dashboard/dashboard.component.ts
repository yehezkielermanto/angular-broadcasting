import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) { }
  message: string = "";

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      let token = sessionStorage.getItem('token');
      window.Echo.options.auth.headers.Authorization = `Bearer ${token}`;
    }
    const id = Number(this.route.snapshot.paramMap.get('id'));
    window.Echo.private(`hello.${id}`).listen('HelloEvent', (e: any) => {
      console.log(e)
      this.message = e.message;
      this.cdr.detectChanges();
    })
  }
}
