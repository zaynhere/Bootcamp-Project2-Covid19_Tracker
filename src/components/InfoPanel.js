import React from 'react';
import GlobalStats from './GlobalStats'
import CountryStats from './CountryStats'
import Chart from './Chart'

export default function InfoPanel({currentScreen}) {

    if (currentScreen === 0){
        return <GlobalStats />
    }
    else if (currentScreen === 1){
        return <CountryStats />
    } 
    else if(currentScreen === 2){
        return <Chart />
    }
}
