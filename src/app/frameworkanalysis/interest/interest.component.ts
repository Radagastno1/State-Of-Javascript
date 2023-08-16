import { Component } from '@angular/core';
import { frameworks } from 'data';
import { Framework } from 'data';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['../common-layout/common-layout.component.css']
})
export class InterestComponent {

  interestData = frameworks;

  getUniqueYears() {
    const allYears = this.interestData.flatMap(framework =>
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
      return surveyAtSpecificYear.interest + "%";
    }
    else{
      return null;
    }
   }
}