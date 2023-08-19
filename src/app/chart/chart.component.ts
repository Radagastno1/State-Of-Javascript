import { Component, Input } from '@angular/core';
import { Framework, frameworks } from 'data';

@Component({
  selector: 'chart-layout',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent{

  @Input() dataType: string = ''; 
  
  frameworkData = frameworks;

  getUniqueYears() {
    const allYears = this.frameworkData.flatMap((framework) =>
      framework.surveys.map((survey) => survey.year)
    );
    const uniqueYears = Array.from(new Set(allYears));
    return uniqueYears;
  }

  getSurveyOfYear(year: number, framework: Framework) {
    const foundFramework = frameworks.find((f) => f.name == framework.name);
    const surveyAtSpecificYear = foundFramework?.surveys.find(
      (s) => s.year == year
    );

    let returnData;

    switch (this.dataType) {
      case 'retention':
        returnData = surveyAtSpecificYear?.retention
          ? surveyAtSpecificYear.retention + '%'
          : null;
        break;
      case 'interest':
        returnData = surveyAtSpecificYear?.interest
          ? surveyAtSpecificYear.interest + '%'
          : null;
        break;
      case 'usage':
        returnData = surveyAtSpecificYear?.usage
          ? surveyAtSpecificYear.usage + '%'
          : null;
        break;
      case 'awareness':
        returnData = surveyAtSpecificYear?.awareness
          ? surveyAtSpecificYear.awareness + '%'
          : null;
        break;
      default:
        returnData = null;
    }

    return returnData;
  }
}
