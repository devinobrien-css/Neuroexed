import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Chart, Title, ArcElement, Legend, Tooltip, registerables } from 'chart.js';
Chart.register(Title, ArcElement, Legend, Tooltip);
import './user_skills.css'


const state1 = {
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


const state2 = {
    labels: ['June', 'July', 'August'],
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
        data: [10, 20, 80],
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






/** Constructs menu section with buttons referencing in-class toggle function
 * 
 * @param {*} args {
 * 		page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a menu of buttons that toggle the user profile content
 */
 const Buttons = (args) => {
    const buttons = ['JOB','CATEGORY'];
    const titles = {'JOB':'Skills by Job','CATEGORY':'Skills by Category'};
    const output = [];
    buttons.forEach((button) => {
        if(button === args.type){
            output.push(<button className='selected' onClick={args.functions[button]}>{titles[button]}</button>);
        }
        else {
            output.push(<button onClick={args.functions[button]}>{titles[button]}</button>);
        }
    })
    return output;
}

/** Builds and returns a menu for switching between the user profile content sections 
 * 
 * @param {*} args {
 * 		page : specifies the current tab selected
 * 		functions : list of pointers referencing in-class toggle function
 * }
 * @returns a menu of buttons for switching the profile content
 */
const ChartDataToggle = (args) => {
	return (
		<>
			<div className='chart-toggle-menu'>
				<div>
					<Buttons type={args.type} functions={args.functions}/ >
				</div>
			</div>
		</>
	);
}

/**
 * 
 * @param {*} args 
 * @returns 
 */
const ChartContentSection = (args) => {
    if(args.type === 'JOB'){
        return (
            <div className='pie-chart-container'>
                <Doughnut
                    options={options.options} 
                    data={state1}
                />
            </div>
        )
    }
    else if(args.type === 'CATEGORY'){
        return (
            <div className='pie-chart-container'>
                <Doughnut
                    options={options.options} 
                    data={state2}
                />
            </div>
        )
    }
    else {
        return (
            <p>unkown input</p>
        )
    }
}



/** Builds and returns the menu and content section of the skills chart on a user page
 * 
 * @returns 
 */
const ChartContainer = () => {
    const [currentState, setState] = React.useState("");//initialize state variable
    if(currentState === "")//set initial state if empty
		setState("CATEGORY");

	/** Toggles the state of content to render based off of tab selected
	 * 
	 * @param {*} state specifies state to switch to
	 */
    const handleToggle = (state) => {
        setState(state);
    };
	const stateFunctions = {'JOB': ()=>handleToggle('JOB'), 'CATEGORY': ()=>handleToggle('CATEGORY')};

	return (
		<>
			<ChartDataToggle  type={currentState} functions={stateFunctions} />
			<ChartContentSection type={currentState} />
		</>
	);
}


/** Renders the chart container holding chart toggle and piechart
 * 
 */
export default class SkillsChart extends React.Component {
  render() {
    return (
        <ChartContainer />
    );
  }
}