import { Component } from '@angular/core';
import { Framework, frameworks } from 'data';

@Component({
  selector: 'app-retention',
  templateUrl: './retention.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class RetentionComponent {
  retentionData = frameworks;

  getUniqueYears() {
    const allYears = this.retentionData.flatMap(framework =>
      framework.surveys.map(survey => survey.year)
    );
    const uniqueYears = Array.from(new Set(allYears));
    console.log(uniqueYears);
    return uniqueYears;
  }

   getSurveyOfYear(year:number, framework:Framework){
    const foundFramework = frameworks.find(f => f.name == framework.name);
    const surveyAtSpecificYear = foundFramework?.surveys.find(s => s.year == year);
    if(surveyAtSpecificYear){
      return surveyAtSpecificYear.retention + "%";
    }
    else{
      return null;
    }
   }
}
