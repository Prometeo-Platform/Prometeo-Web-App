import React from 'react';
import { AreaChart } from "@carbon/charts-react";

function FirefighterChart() {
  const state = {
      data: [
      {
        "group": "CO now",
        "date": "2020-01-10T09:01:00.000Z",
        "value": 10
      },
      {
        "group": "CO now",
        "date": "2020-01-10T09:02:00.000Z",
        "value": 20
      },
      {
        "group": "CO now",
        "date": "2020-01-10T09:03:00.000Z",
        "value": 30
      },
      {
        "group": "CO now",
        "date": "2020-01-10T09:04:00.000Z",
        "value": 35 
      },
      {
        "group": "CO now",
        "date": "2020-01-10T09:05:00.000Z",
        "value": 40
      },


      {
        "group": "CO 10m",
        "date": "2020-01-10T09:01:00.000Z",
        "value": 30
      },
      {
        "group": "CO 10m",
        "date": "2020-01-10T09:02:00.000Z",
        "value": 10
      },
      {
        "group": "CO 10m",
        "date": "2020-01-10T09:03:00.000Z",
        "value": 50
      },
      {
        "group": "CO 10m",
        "date": "2020-01-10T09:04:00.000Z",
        "value": 50
      },
      {
        "group": "CO 10m",
        "date": "2020-01-10T09:05:00.000Z",
        "value": 40
      },


      {
        "group": "CO 4h",
        "date": "2020-01-10T09:01:00.000Z",
        "value": 10
      },
      {
        "group": "CO 4h",
        "date": "2020-01-10T09:02:00.000Z",
        "value": 15
      },
      {
        "group": "CO 4h",
        "date": "2020-01-10T09:03:00.000Z",
        "value": 14
      },
      {
        "group": "CO 4h",
        "date": "2020-01-10T09:04:00.000Z",
        "value": 20
      },
      {
        "group": "CO 4h",
        "date": "2020-01-10T09:05:00.000Z",
        "value": 15
      },


      {
        "group": "CO 8h",
        "date": "2020-01-10T09:01:00.000Z",
        "value": 8
      },
      {
        "group": "CO 8h",
        "date": "2020-01-10T09:02:00.000Z",
        "value": 10
      },
      {
        "group": "CO 8h",
        "date": "2020-01-10T09:03:00.000Z",
        "value": 15
      },
      {
        "group": "CO 8h",
        "date": "2020-01-10T09:04:00.000Z",
        "value": 25
      },
      {
        "group": "CO 8h",
        "date": "2020-01-10T09:05:00.000Z",
        "value": 20
      },
    ],
      options: {
      "title": "Carbon monoxide over time",
      "axes": {
        "bottom": {
          "title": "Time",
          "mapsTo": "date",
          "scaleType": "time"
        },
        "left": {
          "title": "Measure (ppm)",
          "mapsTo": "value",
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

export default FirefighterChart;
