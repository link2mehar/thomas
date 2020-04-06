import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import NewIcon from '../../assets/new-icon.svg';
import Typography from '@material-ui/core/Typography';
import animation from '../../assets/piggy.json';

const useStyles = makeStyles(theme => ({
  container: {
    color: 'white',
    paddingBottom: 100,
    paddingTop: 70,
    justifyContent: 'center',
    backgroundColor: '#B3BFEB',
    [theme.breakpoints.down('sm')]: {
      paddingTop:200
    }
  },
  outerContainer: {
    backgroundColor: '#B3BFEB',
    width:'100%',
  },
  containerInner: {
    maxWidth: 665
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
      color:'#fff',
      '& span': {
        color: '#fff !important'
      }
      }
  },
  headerIcon: {
    width: 91,
    position: 'absolute',
    bottom: 2
  },
  subtitle: {
    fontSize: 24,
    lineHeight: '28px',
    maxWidth: 457,
    textAlign: 'center',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 30,
      lineHeight: '35px',
      }
  },
  subtitleContainer: {
    textAlign: 'center',
    maxWidth: 457,
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
    paddingLeft: 70,
    '& svg': {
      width: '648px !important'
    },
    [theme.breakpoints.down('sm')]: {
      '& svg': {
        width: '900px !important'
      },
      paddingLeft:0,
      paddingTop:50
      }
  }
}));

const Tip = ({
  title,
  subtitle,
  subtitleImageOne,
  subtitleImageTwo,
  rightImage
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.outerContainer}>
      <Container maxWidth='xl'>
        <Grid container className={classes.container} spacing={2}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            className={classes.containerInner}
          >
            <Box style={{ position: 'relative' }}>
              <Typography className={classes.heading} component='span'>
                Tip
              </Typography>
              <img className={classes.headerIcon} src={NewIcon} alt='' />
            </Box>
            <Box className={classes.subtitleContainer}>
              <Typography className={classes.subtitle} component='p'>
                Tip the creator of your choice in a one time donation or on a
                monthly basis
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
      </Container>
    </Box>
  );
};

export default Tip;
