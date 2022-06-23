import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Chart, Title, ArcElement, Legend, Tooltip, registerables } from 'chart.js';
Chart.register(Title, ArcElement, Legend, Tooltip);
import './user_skills.css'


const state = {
    labels: ['January', 'February', 'March','April', 'May'],
    datasets: [{
        label: 'TESTER',
        backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4'
        ],
        hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F'
        ],
        data: [10, 59, 80, 81, 56],
        hoverOffset: 10,
    }]
}

const options = {
    options: {
        cutout: 30,
        borderRadius:10,
        layout: {
            padding: {
                left:10
            }
        },
        plugins: {
            legend: {
                display:true,
                position:'right',
                labels:{
                    font: {
                        size:18,   
                    },
                    color:'black',
                    usePointStyle:true,
                    pointStyle:'circle',
                },
            },
            tooltip:{
                enabled:true,
                backgroundColor: 'rgb(200,200,200)'
            }
        },
    }
};

export default class SkillsChart extends React.Component {
  render() {
    return (
        <div className='pie-chart-container'>
            <Doughnut
                options={options.options} 
                data={state}
            />
        </div>
    );
  }
}