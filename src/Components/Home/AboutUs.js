import React from 'react';
import                                                       'bootstrap/dist/css/bootstrap.min.css';
import './AboutUs.css'
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
        
        maxHeight:"60%",
        width:"100%",
        background:"linear-gradient(to right, #347227, #ffffff, #ff0101)"

    },
    img: {
        borderRadius: "50px",
    }
  });

  const AboutUs = () => {
    
    
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
                    Cognigy is an enterprise software provider for conversational AI automation. Our platform, Cognigy.AI, automates customer and employee communications. Available in on-premises and SaaS environments, Cognigy.AI enables enterprises to have natural language conversations with their users on any channel – webchat, SMS, voice and mobile apps – and in any language. 

                    Cognigy.AI powers intelligent voice- and chatbots that communicate consistently and accurately beyond simple FAQ, resulting in reduced contact center costs and increased efficiency while improving user experiences. Cognigy’s worldwide client portfolio includes Daimler, Bosch, Lufthansa, Salzburg AG and many more. 
                    </Typography>
                    
                    </CardContent>
                </CardActionArea>
            </Card> 
            </Slide>
            </Page>
          )
    }
    export default  AboutUs








