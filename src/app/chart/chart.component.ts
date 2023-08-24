import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Framework, frameworks } from 'data';

@Component({
  selector: 'chart-layout',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent{

  dataType: string = 'retention';

  constructor(private router: Router, private route: ActivatedRoute) {}

    //man kan sköta ju routingen i app.ts men eftersom det bara är chart-komponenten som är beroende
    //av olika endpoints och olika datatyper så valde jag ändå att ha den här för läsbarheten och att
    //se helheten av vad som sker med datan i komponenten
  ngOnInit(): void {
    // här prenumererar vi på ändringar i urlen och sätter datatype till nya param
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.dataType = type;
      }
    });
  }
  
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
