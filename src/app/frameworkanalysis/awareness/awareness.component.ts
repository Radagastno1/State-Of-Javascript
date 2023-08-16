import { Component } from '@angular/core';
import { Framework } from 'data';
import { frameworks } from 'data';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class AwarenessComponent {

  awarenessData = frameworks;

  getUniqueYears() {
    const allYears = this.awarenessData.flatMap(framework =>
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
      return surveyAtSpecificYear.awareness + "%";
    }
    else{
      return null;
    }
   }
}