import { Injectable } from '@angular/core';
import { Framework } from 'data';
import { frameworks } from 'data';

@Injectable({
  providedIn: 'root'
})
export class FrameworkManagerService {

  constructor() { }

  frameworkData = frameworks;

  getUniqueYears() {
    const allYears = this.frameworkData.flatMap(framework =>
      framework.surveys.map(survey => survey.year)
    );
    const uniqueYears = Array.from(new Set(allYears));
    console.log(uniqueYears);
    return uniqueYears;
  }

  getSurveyOfYear(year:number, framework:Framework,dataType: string) {

    const foundFramework = frameworks.find(f => f.name == framework.name);
    const surveyAtSpecificYear = foundFramework?.surveys.find(s => s.year == year);
    
    let returnData;

    switch (dataType) {
      case 'retention':
        returnData = surveyAtSpecificYear?.retention ? surveyAtSpecificYear.retention + "%" : null;
      break;
      case 'interest':
        returnData = surveyAtSpecificYear?.interest ? surveyAtSpecificYear.interest + "%" : null;
        break;
      case 'usage':
        returnData = surveyAtSpecificYear?.usage ? surveyAtSpecificYear.usage + "%" : null;
        break;
      case 'awareness':
        returnData = surveyAtSpecificYear?.awareness ? surveyAtSpecificYear.awareness + "%" : null;
        break;
      default:
        returnData = null;
    }

    return returnData;
  }
}
