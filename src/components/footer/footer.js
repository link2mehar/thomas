import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import AndroidImage from '../../assets/android.svg';
import IosImage from '../../assets/ios.svg';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  links: {
    fontSize: 24,
    paddingTop: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: '28px',
    '&  a': {
      color: 'black',
      textDecoration: 'none'
    },
    '&  a:hover, a:active, a:visited, a:focus': {
      color: 'black',
      textDecoration: 'underscore'
    },
    '&  * + *': {
      marginLeft: theme.spacing(13)
    }
  },
  outerContainer: {},
  container: {
    padding: 90
  },
  heading: {
    fontSize: 48,
    lineHeight: ' 56px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  copyright: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 24,
    lineHeight: '28px'
  },
  footerImageTwo: {
    marginLeft: 30
  },
  footerImage: {
    paddingTop: 50,
    '& img': {
      maxWidth: 165
    }
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.outerContainer}>
      <Container disableGutters maxWidth='xl'>
        <Grid
          container
          justify='center'
          alignItems='center'
          className={classes.container}
        >
          <Grid item md={12}>
            <Typography className={classes.heading} component='h2'>
              Download the App for free
            </Typography>
          </Grid>

          <Grid className={classes.footerImage}>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://apps.apple.com/fr/app/sinaps-social-network/id1455846905'
            >
              <img src={IosImage} alt='' />
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='https://play.google.com/store/apps/details?id=com.maxgfr.sponsy&hl=fr&showAllReviews=true'
            >
              <img
                className={classes.footerImageTwo}
                src={AndroidImage}
                alt=''
              />
            </a>
          </Grid>
          <Grid item md={12}>
            <div className={classes.links}>
              <Link href='/contact'>Contact</Link>
              <Link href='/about'>About Us</Link>

              <Link href='/terms'>Privacy</Link>
              <Link href='/terms'>Terms</Link>
            </div>
          </Grid>
          <Grid item md={12}>
            <Typography className={classes.copyright} component='p'>
              2020 © Sinaps All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
