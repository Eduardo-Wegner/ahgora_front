import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core/';
import logo from './logo.svg';
import Frame from './views/container/Frame';
import Auth from './views/authorize';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid container direction="column" justify="center" alignItems='stretch' style={{backgroundColor:'#000',width:'100%', height:'100%'}} >
        <Frame></Frame>
      </Grid>
     
    );
  }
}

export default App;
