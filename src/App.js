
import React, {} from 'react';
import Confetti from 'react-confetti'
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import Content from './Content.js'
import './App.css';
import Typical from 'react-typical'
import ParticlesBg from "particles-bg";


function App() {

    return (
        <div>

            <div className="fillscreen" id="">
                <ParticlesBg color={["#000000"]} type="cobweb" bg={true} num={[55]} v={[1, 2]} />

                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces = {500}
                    recycle = {false}
                    friction={0.99}
                />

                <div className="frontpage text zoom">

                    <Typical
                        steps={['Software Engineer 👾 ' , 3000, 'Web Developer 👾 ' , 3000, 'Machine Learning? ' , 2000, 'Still Learning! ' , 3000 ]}
                        loop={100}
                        wrapper="p"
                    />
                    <p id="color">Located in SF Bay Area</p>
                </div>
               
                <div className="container">
                    <div className="cen" >
                        <Link
                            activeClass = "active"
                            to ="#section2"
                            smooth={true}
                            offset={-window.innerHeight * 0.40}
                            duration={1500}>
                            Move this page
                        </Link>

                    </div>

                </div>

            </div>

        <Content/>


        </div>



  );
}

export default App;



/*
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }));
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


<Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
    <Grid container direction="column" justify="center" alignItems="center" justify="center" spacing={2}>
    {[0, 1, 2].map((value) => (
    <Grid key={value} item>
        <Paper className={classes.paper} />
    </Grid>
))}
</Grid>
</Grid>

</Grid>
<Paper className={classes.paper} /> */
