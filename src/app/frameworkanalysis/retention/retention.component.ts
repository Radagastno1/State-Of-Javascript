import { Component } from '@angular/core';
import { frameworks } from 'data';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class RetentionComponent {
  retentionData = frameworks;
}
