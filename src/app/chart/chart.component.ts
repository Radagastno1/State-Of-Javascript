import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Framework, frameworks } from 'data';

@Component({
  selector: 'chart-layout',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})

export class ChartComponent implements OnInit{

  dataType: string = 'retention';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // här prenumererar vi på ändringar i urlen och sätter datatype till nya param
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.dataType = type;
        console.log(this.dataType);
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
