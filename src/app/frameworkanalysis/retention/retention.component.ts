import { Component } from '@angular/core';
import { Framework, frameworks } from 'data';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class RetentionComponent {
  retentionData = frameworks;
   years = frameworks[0].surveys.map(survey => survey.year);

   getSurveyOfYear(year:number, framework:Framework){
    const foundFramework = frameworks.find(f => f.name == framework.name);
    const surveyAtSpecificYear = foundFramework?.surveys.find(s => s.year == year);
    if(surveyAtSpecificYear){
      return surveyAtSpecificYear.retention;
    }
    else{
      return null;
    }
   }
}
