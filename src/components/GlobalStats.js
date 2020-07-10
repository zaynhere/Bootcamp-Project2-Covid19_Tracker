import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CovidLogo from './covid-logo';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 800,
        margin: '0 auto',
        marginTop: 30,
        marginBottom: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: '#2a2a28'
    },
    title: {
        color: '#f28d2f'
    },
    results: {
        color: 'white'
    }

}));

export default function GlobalStats() {
    const classes = useStyles();
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

    return (
        
        <div className={classes.root}>
            <CovidLogo/>
            <br /> 
            <br />
            <Grid container spacing={3} >
                {Object.keys(GlobalData).map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={4} key={ind}>
                            <Paper className={classes.paper} elevation={5} >
                                <h5 className={classes.title}>{key.replace(/_/g , " ").toUpperCase()}</h5>
                                <span className={classes.results}><CountUp start={0} end={GlobalData[key]} duration={2.5} seperator="," /></span>
                                
                            </Paper>
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
