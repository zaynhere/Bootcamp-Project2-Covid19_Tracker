import React, {useState, useEffect} from 'react';
import {Pie} from 'react-chartjs-2';


export default function Chart(){

    const [GlobalData, setGlobalData] = useState({})
    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?global=stats");
            let data = await response.json();
            delete data.results[0].source;
            setGlobalData(data.results[0])
            
        }
        getData();
    }, [])
    
    const data = {
        labels: [
            'Deaths',
            'Recovered',
            'Infected'
        ],
        datasets: [{
            data: [GlobalData["total_deaths"], GlobalData["total_recovered"], GlobalData["total_cases"]],
            backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ],
            hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
            ]
        }]
    };
    

    return (
      <div className="chart" >
        <h2 >Global Chart</h2>
        <Pie className="pie" data={data} />
      </div>
    );
}