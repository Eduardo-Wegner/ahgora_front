import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {Container,
    Box,
    Button,
    Grid,
    Modal,
    GridList,
    GridListTile,
    GridListTileBar} from '@material-ui/core/';

class List_video extends Component{
    constructor(){
        super()

        this.state={
            isOpen:false,
            data:[]
        }
    }

    componentDidMount(){
        console.log(this.props.list)
        this.setState({data:this.props.list})
    }

    componentWillReceiveProps(){
        console.log(this.props.list)
        this.setState({data:this.props.list})
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
      if (this.state.data !='') {
        return(
          <div style={{
              // display: 'flex',
              // flexWrap: 'wrap',
              // justifyContent: 'space-around',
              // overflow: 'hidden',
              backgroundColor: 'black',
            }}>
       {this.state.data.map((tile, index) => (
          <div className={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              overflow: 'hidden',
              backgroundColor: 'black',
            }}><h3 style={{color:'white'}} >Day: {index+1}</h3>
          <GridList style={{flexWrap: 'nowrap',transform: 'translateZ(0)'}} cols={3}>
            {tile.map((tile, index) => (
              <GridListTile key={tile.title}>
                <img src={tile.thumbnail} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}

                  actionIcon={
                    <IconButton aria-label={`star ${tile.title}`}>
                      <StarBorderIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
          </div>
      ))}
        </div>
          
      );
      }else{
        return(<div></div>)
      }
       
    }
}

export default List_video;