import React from 'react';
import { GaugeChart } from "@carbon/charts-react";

function FirefighterGauges() {
  const state = {
    data: [
      {
        "group": "value",
        "value": 67
      }
    ],
    options: {
        "resizable": true,
        "height": "90px",
        "gauge": {
            "type": "full"
        },
        "gaugePercentages": [
            { low: 0, high: 50, color: 'green' },
            { low: 50, high: 75, color: 'yellow' },
            { low: 75, high: 100, color: 'red' }
        ]
      }
	};
  return (
    <div className="bx--grid bx--grid--full-width dashboard-content sensors-page">

      <div className="bx--row row-box header">
        <div className="bx--col-lg-16">
          Now
        </div>
      </div>

      <div className="bx--row sensors-page__r2 row-box content">
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">CO</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">NO<sub>2</sub></div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Temperature</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Humidity</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Benzene</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Formaldehyde</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Acrolein</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          
        </div>
      </div>

      <div className="bx--row row-box header">
          <div className="bx--col-lg-16">
            10 minute average
          </div>
      </div>

      <div className="bx--row sensors-page__r2 row-box content">
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">CO</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">NO<sub>2</sub></div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Temperature</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Humidity</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Benzene</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Formaldehyde</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Acrolein</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          
        </div>
      </div>

      <div className="bx--row row-box header">
        <div className="bx--col-lg-16">
          8 hour average
        </div>
      </div>

      <div className="bx--row sensors-page__r2 row-box content">
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">CO</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">NO<sub>2</sub></div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Temperature</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle">
            <div class="inner-circle">30<br />ppm</div>
            <div class="inner-label">Humidity</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Benzene</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Formaldehyde</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          <div class="outer-circle-disabled">
            <div class="inner-circle-disabled">30<br />ppm</div>
            <div class="inner-label-disabled">Acrolein</div>
          </div>
        </div>
        <div className="bx--col-lg-2">
          
        </div>
      </div>

      <div className="bx--row sensors-page__r2">
        <div className="bx--col-lg-16">
        
        {/*
          <GaugeChart
            data={state.data}
            options={state.options}>
          </GaugeChart>

          <GaugeChart
            data={state.data}
            options={state.options}>
          </GaugeChart>

          <GaugeChart
            data={state.data}
            options={state.options}>
          </GaugeChart>
        */}

        </div>
      </div>
    </div>

  );
}

export default FirefighterGauges;
