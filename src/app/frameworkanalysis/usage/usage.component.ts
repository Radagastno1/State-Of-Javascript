import { Component } from '@angular/core';
import { Framework } from 'data';
import { frameworks } from 'data';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class UsageComponent {

  usageData = frameworks;

  getUniqueYears() {
    const allYears = this.usageData.flatMap(framework =>
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
      return surveyAtSpecificYear.usage + "%";
    }
    else{
      return null;
    }
   }
}