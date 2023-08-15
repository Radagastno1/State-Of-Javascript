import { Component } from '@angular/core';
import { frameworks } from 'data';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['./retention.component.css']
})
export class RetentionComponent {
  retentionData = frameworks;
}
