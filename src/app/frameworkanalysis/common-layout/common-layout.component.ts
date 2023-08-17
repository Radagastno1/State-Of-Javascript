import { Component, Input } from '@angular/core';
import { FrameworkManagerService } from 'src/app/framework-manager.service';
import { Framework } from 'data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent {
  @Input() dataType: string = '';
  
  constructor(
    private frameworkManagerService: FrameworkManagerService,
    private route: ActivatedRoute
  ) {}

  frameworkData = this.frameworkManagerService.frameworkData;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.dataType = params.get('type') || ''; 
    });
  }
  
  getSurveyOfYear(year: number, framework: Framework, dataType:string) {
    return this.frameworkManagerService.getSurveyOfYear(year, framework, dataType);
  }

  getUniqueYears(){
    return this.frameworkManagerService.getUniqueYears();
  }
}
