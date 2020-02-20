import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Box, Button,Grid,Modal} from '@material-ui/core/';

class Auth extends Component{
    constructor(){
        super()

        this.state={
            isOpen:false,
            url:'',
            authorized:false
        }
    }

    componentDidMount(){
        let searchParam = new URLSearchParams(window.location.search)
        try {
            console.log(searchParam.get('authorized'))    
            if(searchParam.get('authorized')){
                this.setState({authorized:true})
            }
        } catch (error) {
            throw(error)
        }
    }

    auth(params) {
        let url = window.location.origin + '/authorize';
        console.log(url)
        let aux;
        fetch(url).then((data)=>data.json()).then((res)=>{
            console.log(res)
            window.open(res.url,"_self")
        })
    }

    render(){
        return(
              <Box  my={0} style={{ backgroundColor: '#ddee00', height: '100px', width:'100%'}}>
                <Grid container direction='row' justify='space-between' alignItems="center" style={{height:'100%', width:'98%'}} >
                    <Grid item xs={'auto'} alignItems="center">
                        <h1>Google Authorize</h1>
                    </Grid>
                    <Grid item xs={'auto'} justify="center" alignItems="center" >
                        <Button variant="contained" color="primary" onClick={()=>this.auth()} disabled={this.state.authorized}>{this.state.authorized? 'Authorized':'Authorize'} </Button>
                    </Grid>
                </Grid>
                
              </Box>
            
        );
    }
}

export default Auth;