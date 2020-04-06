import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import NewIcon from '../../assets/new-icon.svg';
import Reward from '../../assets/illustration_3.png';
import animation from '../../assets/girl_deals.json';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    color: 'white',
    paddingBottom: 91,
    paddingTop: 70,
    justifyContent: 'space-between',
    backgroundColor: '#B3BFEB',
    [theme.breakpoints.down('sm')]: {
      paddingBottom:0,
    }
  },
  outerContainer: {
    backgroundColor: '#B3BFEB',
    width:'100%',
  },
  heading: {
    fontSize: 72,
    lineHeight: '84px',
    padding: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    '& span': {
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 100,
      color:'#fff',
      '& span': {
        color: '#fff !important'
      }
      }
  },
  headerIcon: {
    width: 90,
    position: 'absolute',
    bottom: 2
  },
  subtitle: {
    fontSize: 24,
    lineHeight: '28px',
    maxWidth: 530,
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '35px',
      color:'#fff !important'
      }
  },
  subtitleContainer: {
    textAlign: 'center',
    maxWidth: 480,
    paddingTop: 25,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 700,
      paddingTop: 35,
      }
  },
  copyright: {
    textAlign: 'center',
    padding: 20,
    fontSize: 25
  },
  rightImage: {
    maxWidth: '90%',
    paddingLeft: 50
  },

  artwork: {
    paddingTop: 100,
    paddingLeft: 70,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      }
  },
  animationContaier: {
    '& svg': {
      width: '450px !important'
    },
    [theme.breakpoints.down('sm')]: {
      '& svg': {
        width: '700px !important'
      }
  }
},
  artworkImage: {
    maxWidth: 400,
    [theme.breakpoints.down('sm')]: {
      maxWidth:'700px',
      }
  },
  primary: {
    background: '#B3BFEB',
    color: 'white'
  },
  secondary: {
    background: 'white',
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      background: '#b3bfeb',
    }
  }
}));

const PromoteReward = ({ parimary }) => {
  const classes = useStyles();
  return (
    <Box
      className={`${classes.outerContainer} ${
        parimary ? classes.primary : classes.secondary
      }`}
    >
      <Grid container>
        <Grid
          item
          md={6}
          xs={12}
          className={`${classes.container} ${
            parimary ? classes.primary : classes.secondary
          }`}
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box style={{ position: 'relative' }}>
              <Typography className={classes.heading} component='span'>
                Promote
              </Typography>
              <img className={classes.headerIcon} src={NewIcon} alt='' />
            </Box>
            <Box className={classes.subtitleContainer}>
              <Typography className={classes.subtitle} component='p'>
                Advertize your content or someone else’s across many deals and
                platforms
              </Typography>
            </Box>
            <Box className={classes.animationContaier}>
              <Lottie
                options={{
                  animationData: animation
                }}
              />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          className={`${classes.container} ${
            parimary ? classes.primary : classes.secondary
          }`}
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
          >
            <Box>
              <Typography
                className={classes.heading}
                style={{ marginLeft: 0 }}
                component='span'
              >
                Reward
              </Typography>
            </Box>
            <Box className={classes.subtitleContainer}>
              <Typography className={classes.subtitle} component='p'>
                You like some content? Let the author know with a donation
                directly on their post
              </Typography>
            </Box>
            <Box className={classes.artwork}>
              <img
                className={classes.artworkImage}
                style={{ width: '400px !important' }}
                src={Reward}
                alt=''
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromoteReward;
