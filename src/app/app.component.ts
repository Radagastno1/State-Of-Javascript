import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'State of Javascript';
  
  constructor(private router: Router, private route: ActivatedRoute) {}

  getCurrentDataType(): string {
    let dataType = 'retention'; 
    const segments = this.router.routerState.snapshot.url.split('/').filter(segment => segment.length > 0);
    
    if (segments.length > 0) {
      dataType = segments[0];
    }
    
    return dataType;
  }
}
