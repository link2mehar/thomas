import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ShareImage from '../../assets/illustration_2.png';
import Typography from '@material-ui/core/Typography';
import animation from '../../assets/discover.json';

const useStyles = makeStyles(theme => ({
  container: {
    color: 'white',
    paddingBottom: 106,
    paddingTop: 70,
    justifyContent: 'space-between',
    backgroundColor: '#B3BFEB',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 150,
      }
  },
  outerContainer: {
    backgroundColor: '#B3BFEB',
    width:'100%',
    boxSizing:'border-box',
  },
  textContainer: {
    color: 'white',
    padding: '70px 20px',
    textAlign: 'center'
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
      }
  },
  headerIcon: {
    width: 80
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
      }
  },
  subtitleContainer: {
    textAlign: 'center',
    maxWidth: 530,
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
    paddingTop:'72px',
    paddingLeft: 70,
    '& svg': {
      width: '362px !important'
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop:'100px',
      paddingLeft: 0,
      '& svg': {
        width: '700px !important'
      },
      },
  },
  topSame:{
    paddingTop:'92px',
    [theme.breakpoints.down('sm')]: {
      paddingTop:'100px'
      },
    
  },

  artworkImage: {
    maxWidth: 611,
    paddingLeft: 70,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '700px',
      transform: 'scale(1.2)',
      paddingTop: '40px',
      paddingLeft: 0
      },
  },
  primary: {
    background: '#B3BFEB',
    color: 'white'
  },
  secondary: {
    background: 'white',
    color: 'black'
  }
}));

const ShareDiscover = ({ primary }) => {
  const classes = useStyles();
  const bodymovinOptions = {
    loop: true,
    autoplay: true,
    prerender: true,
    animationData: animation
  };
  return (
    <Box
      className={`${classes.outerContainer} ${
        primary ? classes.primary : classes.secondary
      }`}
    >
      <Container maxWidth='xl'>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            
            className={`${classes.container} ${
              primary ? classes.primary : classes.secondary
            }`}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <Typography className={classes.heading} component='span'>
                  Share
                </Typography>
              </Box>
              <Box className={classes.subtitleContainer}>
                <Typography className={classes.subtitle} component='p'>
                  Share your content from your favorite platforms to show what
                  you’re passionate about
                </Typography>
              </Box>
              <Box className={classes.artwork} className={classes.topSame}>
                <img
                  className={classes.artworkImage}
                  style={{ width: '600px !important' }}
                  src={ShareImage}
                  alt=''
                />
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            
            className={`${classes.container} ${
              primary ? classes.primary : classes.secondary
            }`}
          >
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
            >
              <Box>
                <Typography className={classes.heading} component='span'>
                  Discover
                </Typography>
              </Box>
              <Box className={classes.subtitleContainer}>
                <Typography className={classes.subtitle} component='p'>
                  Find and discover new creators with similar centers of
                  interest
                </Typography>
              </Box>
              <Box className={classes.artwork}>
                <Lottie
                  options={{
                    animationData: animation
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

ShareDiscover.defaultProps = {
  background: 'primary'
};
export default ShareDiscover;
