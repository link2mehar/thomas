import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    color: 'white',
    paddingBottom: 170,
    paddingTop: 70,
    justifyContent: 'center',
    backgroundColor: '#B3BFEB',
    boxSizing:'border-box',
    [theme.breakpoints.down('md')]: {
      margin: '0 !important',
      width: '100%',
    },
    
  },
  outerContainer: {
    backgroundColor: '#B3BFEB',
    width:'100%',
    boxSizing:'border-box',
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
    [theme.breakpoints.down('md')]: {
      '& span': {
        color: '#fff !important'
      },
      fontSize: 100,
      color:'#fff !important',
      lineHeight:1.2
    }
  },
  snipVideo : {
    [theme.breakpoints.down('md')]: {
      textAlign:'center'
    }
  },
  headerIcon: {
    width: 80
  },
  subtitle: {
    fontSize: 24,
    lineHeight: '28px',
    maxWidth: 457,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subtitleContainer: {
    textAlign: 'center',
    paddingTop: 65
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
    paddingLeft: 70
  },
  artworkImage: {
    maxWidth: 611
  },
  primary: {
    background: '#B3BFEB',
    color: 'white'
  },
  frameWi:{
    width:'893px',
    [theme.breakpoints.down('md')]: {
    width:'750px',
    }

  },
 
  secondary: {
    background: 'white',
    color: 'black',
    [theme.breakpoints.down('md')]: {
      background: '#b3bfeb',
    }
  }
}));

const YoutubePromo = ({ title, url, primary }) => {
  const classes = useStyles();
  return (
    <Box
      className={`${classes.outerContainer} ${
        primary ? classes.primary : classes.secondary
      }`}
    >
      <Container disableGutters maxWidth='xl'>
        <Grid
          container
          className={`${classes.container} ${
            primary ? classes.primary : classes.secondary
          }`}
          spacing={2}
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            className={classes.containerInner}
          >
            <Box className={classes.snipVideo}>
              <Typography className={classes.heading} component='span'>
                {title}
              </Typography>
            </Box>
            <Box className={classes.subtitleContainer}>
              <iframe
                title='sinaps promo video'
                style={{ borderRadius: 20, border: 'none', outline: 'none' }}
                className={classes.frameWi}
                frameBorder='0'
                allowFullScreen='allowFullScreen'
                height='510'
                src={url}
              ></iframe>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

YoutubePromo.defaultProps = {
  title: 'Discover Sinaps'
};
export default YoutubePromo;
