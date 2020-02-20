import React, { Component } from 'react';
import List from './list';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container,Box, form, TextField,InputBase,Grid} from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LoadingScreen from 'react-loading-screen'

class Search extends Component{
    constructor(){
        super()

        this.state={
            hours_perday:1,
            search:'',
            authorized:false,
            list:[],
            loading:false
        }
    }

    componentDidMount(){
        let searchParam = new URLSearchParams(window.location.search),
        parent_props = this.props.get_props;

        try {
            console.log(searchParam.get('authorized'))    
            if(searchParam.get('authorized')){
                this.setState({authorized:true})
            }
        } catch (error) {
            throw(error)
        }
    }


    search() {
        this.props.get_props([])
        this.setState({loading:!this.state.loading})
        let url = window.location.origin + '/search?search='+this.state.search+'&daily_time='+this.state.hours_perday;
        this.setState({list:[]})
        console.log(url)
        fetch(url).then(data=>data.json()).then(res=>{
            this.setState({list:res})
            this.setState({loading:!this.state.loading})
            this.props.get_props(res.result)
            console.log(res)
        })
    }

    render(){
        return(
            <LoadingScreen
            loading={this.state.loading}
            bgColor='rgba(241, 241, 241,0.4)'
            spinnerColor='#9ee5f8'
            textColor='#000'
            text='LoAdInG.:.:.:.:.'>
              <Box my={2} style={{backgroundColor:"#feefaa", height:this.state.list!=''?'300px':'150px'}} border={2} borderColor='black' display="block" justify='center'>
                <h2 style={{marginLeft:'20px'}} >SEARCH VIDEO</h2>
                <Grid container direction='row' alignItems="center" style={{width:'98%', height:'50px'}} p={3}>
                    <Grid item xs={9} alignItems="center" ml={5}>
                        <Box ml={2} >
                            <InputBase placeholder='Search videos' onChange={(res)=>this.setState({search:res.target.value})} inputProps={{ 'aria-label': 'Search Youtube Videos' }} style={{width:'95%',backgroundColor:'rgba(0,0,0,0.2)'}} />
                        </Box>
                    </Grid>
                    <Grid item xs={2} justify="space-between">
                        <TextField
                            fullWidth={true}
                            variant="outlined"
                            id="hour-day"
                            label="Minutos por dia | 0 ~ 1439"
                            type="number"
                            min='1'
                            max='1439'
                            value={this.state.hours_perday}
                            onChange={(res)=>{
                                if(res.target.value >= 0 && res.target.value <= 1439){
                                    this.setState({hours_perday:res.target.value})
                                }
                            }} pb={5} />
                        
                    </Grid>
                    <Grid item xs={1} justify="space-between">
                        <IconButton type="submit" aria-label="search" onClick={()=>this.search()}>
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>{this.state.list!='' &&
                    <Box>
                        <Typography><br/>Minutes per DAY: {this.state.list.minutes_per_day}</Typography>
                        <Typography>Total Days: {this.state.list.total_duration_days}</Typography>
                        <Typography>Total Minutes: {this.state.list.total_duration_minutes}</Typography>
                        <Typography>5 most used words in TITLE: {this.state.list.titles.replace(/[,]/g,' | ')}</Typography>
                        <Typography>5 most used words in DESCRIPTIONS: {this.state.list.descriptions.replace(/,/g,' | ')}</Typography>
                    </Box>
                        }
              </Box>
              </LoadingScreen>
        );
    }
}

export default Search;