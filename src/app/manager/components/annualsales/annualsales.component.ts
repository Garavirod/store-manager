import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-annualsales',
  templateUrl: './annualsales.component.html',
  styleUrls: ['./annualsales.component.scss']
})
export class AnnualsalesComponent implements OnInit {
  chartOptions:{};
  Highcharts: typeof Highcharts = Highcharts;
  constructor() {
    this.chartOptions = {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Historic and Estimated sales in last three years'
      },
      subtitle: {
          text: 'Annual Sales'
      },     
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      exporting:{
        enabled:true
      },
      credits:{
        enabled:false
      },
      series: [{
          name: 'Asia',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: 'Africa',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: 'Europe',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: 'America',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: 'Oceania',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
    };
    HC_exporting(Highcharts);
  }

  ngOnInit(): void {
  }

}
