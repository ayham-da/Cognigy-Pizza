import React from 'react';
import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import Page from "react-page-loading";
import { Card, Row } from "react-bootstrap";
import ContactStyles from "./ContactStyle";
import Flip from 'react-reveal/Flip';
import { CardContent, CardActionArea, CardMedia } from '@material-ui/core';
import firstImg from '../../images/pizza.jpg';
import { FaRoute } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import RoomIcon from '@material-ui/icons/Room';
import Map                           from '../../Mab/Map';


const Contact = () => {
    const classes = ContactStyles();
    const contactPageTitle = "cognigy Pizza";
    return (
          <Page loader={"bar"} color={"white"} size={9} duration={1}>
                <Helmet>
                    <title>{contactPageTitle}</title>
                </Helmet>
                <Row className={classes.rowStyle}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Flip left>
                                <CardMedia
                                    className={classes.media}
                                    image={firstImg}
                                />
                            </Flip>

                            <Typography className={classes.headMap}>
                                <RoomIcon />
                                    &nbsp; Hier finden Sie uns!
                            </Typography>
                            <Card.Body className="text-center gmap-container d-flex flex-column align-items-stretch align-content-stretch">
                                <Map center={{lat:51.2140466,lng:6.7493067}} zoom={17}/>
                            </Card.Body>
                            <CardActionArea>
                                <Typography color="dark"className={classes.typo}>
                                    <FaHome /> &nbsp;Cognigy GmbH.
                                </Typography>
                                <Typography color="dark" className={classes.typo}>
                                        <FaRoute /> &nbsp; Speditionstraße 1
                                </Typography>
                                <Typography color="dark" className={classes.typo}>
                                        <FaCity /> &nbsp;  40221 Düsseldorf ,Germany
                                </Typography>
                                <Typography color="dark" className={classes.typo}>
                                        
                                       <a href="mailto:ayham.alaaeddin@gmail.com"
                                        className={classes.email}>
                                            <MailTwoToneIcon /> &nbsp;
                                        Haben Sie noch Fragen? Schreiben Sie Uns!
                                      </a>
                                </Typography>
                            </CardActionArea>
                        </CardContent>
                    </Card>
                </Row>         
          </Page>
    );
};

export default Contact;