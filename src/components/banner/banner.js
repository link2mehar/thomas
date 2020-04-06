import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  links: {
    fontSize: 25,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    '& > a': {
      color: 'black'
    },
    '& > a:hover, a:active, a:visited, a:focus': {
      color: 'black'
    },
    '& > * + *': {
      marginLeft: theme.spacing(6)
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '30px',
    }
  },
  outerContainer: {
    padding: '45px 100px 85px 100px',
    backgroundColor: '#B3BFEB',
    width:'100%',
    boxSizing:'border-box',
    [theme.breakpoints.down('sm')]: {
      marginTop:'150px'
    }

  },
  container: {
    backgroundColor: '#B3BFEB'
  },
  textContainer: {
    padding: 40,
    maxWidth:500,
    [theme.breakpoints.down('sm')]: {
      maxWidth:'unset'
    }
    
  },
  heading: {
    fontSize: 72,
    lineHeight: '84px',
    textAlign: 'left',
    fontWeight: 'bold',
    '& span': {
      color: 'white'
    },
    
  },
  subtitle: {
    fontSize: 24,
    lineHeight: '28px',
    display: 'block',
    fontWeight: 'bold',
    marginTop: 18,
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  },
  copyright: {
    textAlign: 'center',
    padding: 20,
    fontSize: 25
  },
  rightImage: {
    maxWidth: '680px !important',
    paddingLeft: 80,
    [theme.breakpoints.down('sm')]: {
      marginTop:'50px',
      width: '700px !important',
    paddingLeft: 20,
    }
  },
  subtitleImageTwo: {
    marginLeft: 25
  },
  subtitleImage: {
    marginTop: 38,
    '& img': {
      maxWidth: 132
    },
    [theme.breakpoints.down('sm')]: {
      display:'none'
    }
  },
  mobileimg:{
    textAlign:'center',
    marginTop:'100px',
    [theme.breakpoints.up('sm')]: {
      display:'none'
    }
  }
}));

const Banner = ({
  title,
  subtitle,
  subtitleImageOne,
  subtitleImageTwo,
  rightImage
}) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.outerContainer}>
        <Container maxWidth='xl'>
          <Grid container className={classes.container}>
            <Grid item md={5} xs={12}>
              <Box className={classes.textContainer}>
                <Typography className={classes.heading} component='h2'>
                  <span>For</span> creators
                </Typography>
                <Typography className={classes.heading} component='h2'>
                  <span>For</span> viewers
                </Typography>
                <Typography className={classes.heading} component='h2'>
                  <span>For</span> brands
                </Typography>
                <Typography className={classes.subtitle} component='p'>
                  Share or discover new content from your favourite creators &
                  promote yourself or others to create revenue.
                </Typography>
                <Grid className={classes.subtitleImage}>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://apps.apple.com/fr/app/sinaps-social-network/id1455846905'
                  >
                    <img src={subtitleImageOne} alt='' />
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://play.google.com/store/apps/details?id=com.maxgfr.sponsy&hl=fr&showAllReviews=true'
                  >
                    <img
                      className={classes.subtitleImageTwo}
                      src={subtitleImageTwo}
                      alt=''
                    />
                  </a>
                </Grid>
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <img alt='' className={classes.rightImage} src={rightImage} />
              <div>
              <Grid className={classes.mobileimg}>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://apps.apple.com/fr/app/sinaps-social-network/id1455846905'
                  >
                    <img src={subtitleImageOne} alt=''  style={{width:'225px'}}/>
                  </a>
                  <a
                    rel='noopener noreferrer'
                    target='_blank'
                    href='https://play.google.com/store/apps/details?id=com.maxgfr.sponsy&hl=fr&showAllReviews=true'
                  >
                    <img
                      className={classes.subtitleImageTwo}
                      src={subtitleImageTwo}
                      alt=''
                      style={{width:'225px'}}
                    />
                  </a>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Banner;
