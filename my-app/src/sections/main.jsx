import * as React from 'react';
import './main.css';

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./charts/Data";
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
// import "./styles.css";

Chart.register(CategoryScale);

const Main = () => {

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
     

    return (
        <>
            <section id='main-canvas'>
                <div className='canvas'>
                  <h3>Hi</h3>
                    <canvas id='chart.js'>
                        <PieChart chartData={chartData} />
                        <BarChart chartData={chartData} />
                        <LineChart chartData={chartData} />
                    </canvas>
                </div>
            </section>
        </>
    )
};

export default Main;