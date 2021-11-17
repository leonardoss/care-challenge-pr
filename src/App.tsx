import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ClickMe from './components/ClickMe';
import Weather from './Weather/Weather';
import { Grid } from '@material-ui/core';

function App() {
  return (
    <Grid container>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello world</p>
        </header>
        <Grid container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <Grid item xs={6}>
            <ClickMe />
          </Grid>
          <Grid item xs={6}>
            <Weather name="berlin" isLoadingText={'loading ...'} />
          </Grid>
        </Grid>
      </div >
    </Grid>
  );
}

export default App;
