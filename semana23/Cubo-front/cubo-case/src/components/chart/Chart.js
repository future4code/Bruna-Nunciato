import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class Chart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chartData:{
                labels: ['Brasil', 'Estados Unidos', 'Belgica', 'Holanda'],
                datasets:[
                    {
                        label: 'Population',
                        data:[
                            121,
                            323,
                            434,
                            541
                        ],
                        backgroundColor: [
                            'blue', 'orange', 'blue', 'yellow'
                        ]
                    }
                ]
            }
        }
    }
    // static defaultProps = {
    //     displayTitle: true,
    //     displayLegend: true,
    //     legendPosition: 'right',
    //     location: 'City'
    // }

    render(){
         return(
        <div>
            Chart
            <Doughnut
	data={this.state.chartData}
	options={{ maintainAspectRatio: false }}
/>
        </div>
    )
    }
   

}