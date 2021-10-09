import React, { Component } from 'react';
import { BaseNavBar } from "./components/BaseNavBar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppBar, Toolbar } from '@material-ui/core';
import { getUseStyles } from "./AboutusStyles";

const useStyles = getUseStyles();

export default function Aboutus() {

    const classes = useStyles();
    return (
        <div className={classes.allcards}>

            <AppBar className={classes.component}>
                <Toolbar className={classes.container}>
                    <Typography variant="h4"> About Us </Typography>
                </Toolbar>
            </AppBar>

            <Card className={classes.root1}>
                <CardActionArea href="https://github.com/Sadman-Saadat">
                    <CardMedia className={classes.media1} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Sadman Saadat
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Github Profile
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/* <CardActions>
                    <Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(1) }}>
                        Donate
                    </Button>
                </CardActions> */}
            </Card>
            <br />



            {/* <Card className={classes.root2}>
                <CardActionArea>
                    <CardMedia className={classes.media2} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Donation-2
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            300 taka
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(2) }}>
                        Donate
                    </Button>
                </CardActions>
            </Card>
            <br />

            <Card className={classes.root3}>
                <CardActionArea>
                    <CardMedia className={classes.media3} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Donation-3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            500 taka
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className={classes.btn} onClick={() => { handleRoute(3) }}>
                        Donate
                    </Button>
                </CardActions>
            </Card> */}

        </div>
    )

}

export { Aboutus };