import React from 'react';

import { withStyles, Typography } from '@material-ui/core';

import mqttClient from './mqtt';

const styles = theme => ({});

const App = props => {
  const { classes } = props;
  return (
    <div>
      <Typography component="h1" variant="h1">
        IoT-ML-Dashboard
      </Typography>
    </div>
  );
};

export default withStyles(styles)(App);
