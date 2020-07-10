import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function CountryStats() {
    const classes = useStyles();

    const [GlobalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            setGlobalData(Object.values(Object.values(data.countryitems[0])));


        }
        getData();
    }, [])


    return (
        <div className="country" >
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Country Name</StyledTableCell>
                            <StyledTableCell align="right">Total Cases</StyledTableCell>
                            <StyledTableCell align="right">Total Recovered</StyledTableCell>
                            <StyledTableCell align="right">Total Deaths</StyledTableCell>
                            <StyledTableCell align="right">Total Serious Cases</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {GlobalData.map((key, ind) => {
                            return (
                                <StyledTableRow key={ind}>
                                <StyledTableCell component="th" scope="row"> {GlobalData[ind].title} </StyledTableCell>
                                <StyledTableCell align="right">{GlobalData[ind].total_cases}</StyledTableCell>
                                <StyledTableCell align="right">{GlobalData[ind].total_recovered}</StyledTableCell>
                                <StyledTableCell align="right">{GlobalData[ind].total_deaths}</StyledTableCell>
                                <StyledTableCell align="right">{GlobalData[ind].total_serious_cases}</StyledTableCell>
                            </StyledTableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
