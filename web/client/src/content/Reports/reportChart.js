import React from 'react';
import { AreaChart } from "@carbon/charts-react";

function ReportChart() {
  const state = {
      data: [
      {
        "group": "Carbon Monoxide",
        "date": "2019-01-01T05:00:00.000Z",
        "value": 0
      },
      {
        "group": "Carbon Monoxide",
        "date": "2019-01-06T05:00:00.000Z",
        "value": 57312
      },
      {
        "group": "Carbon Monoxide",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 21432
      },
      {
        "group": "Carbon Monoxide",
        "date": "2019-01-15T05:00:00.000Z",
        "value": 70323
      },
      {
        "group": "Carbon Monoxide",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 21300
      },
      {
        "group": "Nitrogen Dioxide",
        "date": "2019-01-01T05:00:00.000Z",
        "value": 50000
      },
      {
        "group": "Nitrogen Dioxide",
        "date": "2019-01-05T05:00:00.000Z",
        "value": 15000
      },
      {
        "group": "Nitrogen Dioxide",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 20000
      },
      {
        "group": "Nitrogen Dioxide",
        "date": "2019-01-13T05:00:00.000Z",
        "value": 39213
      },
      {
        "group": "Nitrogen Dioxide",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 61213
      },
      {
        "group": "Temperature",
        "date": "2019-01-02T05:00:00.000Z",
        "value": 10
      },
      {
        "group": "Temperature",
        "date": "2019-01-06T05:00:00.000Z",
        "value": 37312
      },
      {
        "group": "Temperature",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 51432
      },
      {
        "group": "Temperature",
        "date": "2019-01-13T05:00:00.000Z",
        "value": 40323
      },
      {
        "group": "Temperature",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 31300
      },
      {
        "group": "Humidity",
        "date": "2019-01-02T05:00:00.000Z",
        "value": 10
      },
      {
        "group": "Humidity",
        "date": "2019-01-06T05:00:00.000Z",
        "value": 37312
      },
      {
        "group": "Humidity",
        "date": "2019-01-08T05:00:00.000Z",
        "value": 51432
      },
      {
        "group": "Humidity",
        "date": "2019-01-13T05:00:00.000Z",
        "value": 40323
      },
      {
        "group": "Humidity",
        "date": "2019-01-19T05:00:00.000Z",
        "value": 31300
      },
    ],
      options: {
      "title": "Environmental accumulation",
      "axes": {
        "bottom": {
          "title": "Environmental exposure",
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
