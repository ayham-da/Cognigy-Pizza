import React from 'react';
import                                                       'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css'
import '../../App.css';
import startImg from "../../images/welcome.jpg";
import Slide from 'react-reveal/Slide';
import Page from "react-page-loading";
import { Helmet } from "react-helmet";
import Image from 'react-bootstrap/Image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    
    root: {
        display:"flex",
        justifyContent:'center',
        marginTop:"5px",
        marginLeft:"60%",
        // margin: "auto",
        maxHeight:"60%",
        width:"40%",
        
        borderRadius:"15%",
        background:"linear-gradient(to right, #347227, #ffffff, #ff0101)"

    },
    img: {
        borderRadius: "50px",
    }
  });

  const Homepage = () => {
    
    
        const classes = useStyles();
        const StartPageTitle = "cognigy Pizza";
          
          return (
            <Page loader={"bar"} color={"white"} size={9} duration={1}>
            <Helmet>
                  <title>{StartPageTitle}</title>
            </Helmet>
            <Slide left>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <Typography style={{display:"flex", justifyContent:"center",fontSize:"30px"}} gutterBottom variant="h5" color="textDark" component="h1">
                    cognigy Pizza 
                    </Typography>
                    <Typography style={{display:"flex", justifyContent:"center",fontSize:"25px" }} variant="body2" color="textDark" component="h2">
                        Now you can speak with sasha-bot 
                    </Typography>
                    <Typography style={{display:"flex", justifyContent:"center" ,fontSize:"20px"}} variant="body2" color="textDark" component="p">
                        click on the messnger button and tell sasha if you are hangry , she will help you  
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card> 
            </Slide>
            </Page>
          )
    }
    export default  Homepage