import React from 'react';
import { AreaChart } from "@carbon/charts-react";

function ReportChart() {
  const state = {
      data: [
      {
        "group": "Dataset 1",
        "date": "2019-01-01T05:00:00.000Z",
        "value": 0
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-06T05:00:00.000Z",
        "value": 57312
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 21432
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-15T05:00:00.000Z",
        "value": 70323
      },
      {
        "group": "Dataset 1",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 21300
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-01T05:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-05T05:00:00.000Z",
        "value": 15000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-13T05:00:00.000Z",
        "value": 39213
      },
      {
        "group": "Dataset 2",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 61213
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-02T05:00:00.000Z",
        "value": 10
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-06T05:00:00.000Z",
        "value": 37312
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 51432
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-13T05:00:00.000Z",
        "value": 40323
      },
      {
        "group": "Dataset 3",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 31300
      }
    ],
      options: {
      "title": "Gas accumulation",
      "axes": {
        "bottom": {
          "title": "2019 Annual Sales Figures",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "mapsTo": "value",
          "title": "Measure (ppm)",
          "scaleType": "linear"
        }
      },
      "height": "400px"
    }
	};
  return (
    <div className="bx--grid bx--grid--full-width dashboard-content sensors-page">
      <div className="bx--row sensors-page__r2">
        <div className="bx--col-lg-16">
        
        <AreaChart
          data={state.data}
          options={state.options}>
        </AreaChart>

        </div>
      </div>
      </div>
  );
}

export default ReportChart;
