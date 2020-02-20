import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Box} from '@material-ui/core/';
import Auth from '../authorize';
import Search from '../search';
import List from '../list';


class frame extends Component{

    constructor(){
        super();

        this.state = {
            list_video:[],
            loading:false
        }
    }

    get_list = (list) => {
        console.log(list)
        this.setState({list_video:list})
    }

    render(){
        return(
              <Container style={{backgroundColor:"#000", height:'100%'}} maxWidth='xl' >
               <Auth/>
               <Search get_props={this.get_list}/>  
               {this.state.list_video!='' && <List list={this.state.list_video}/>}             
              </Container>
        );
    }
}

export default frame;