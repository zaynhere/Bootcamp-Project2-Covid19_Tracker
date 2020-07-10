import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LanguageIcon from '@material-ui/icons/Language';
import ExploreIcon from '@material-ui/icons/Explore';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles({
  root: {
      position: 'sticky',
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: '#ef842f',
  },

});

export default function FootNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction  label="Global Stats" icon={<LanguageIcon color="action" fontSize='large' />} />
      <BottomNavigationAction  label="Country Stats" icon={<ExploreIcon color="action" fontSize='large' />} />
      <BottomNavigationAction  label="Graphs" icon={<BarChartIcon color="action" fontSize='large' />}  />
    </BottomNavigation>
  );
}
