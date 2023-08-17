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
    
    if (dataType === 'retention') {
      if(surveyAtSpecificYear){
        return surveyAtSpecificYear.retention + "%";
      }
      else{
        return null;
      }
     
    } else if (dataType === 'interest') {
      if(surveyAtSpecificYear){
        return surveyAtSpecificYear.interest + "%";
      }
      else{
        return null;
      }
    
    }
    else if(dataType === 'usage'){
      if(surveyAtSpecificYear){
        return surveyAtSpecificYear.usage + "%";
      }
      else{
        return null;
      }

    }
    else if(dataType === 'awareness'){
      if(surveyAtSpecificYear){
        return surveyAtSpecificYear.awareness + "%";
      }
      else{
        return null;
      }

    }
    return null;
  }

}
