import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    color: 'white',
    paddingBottom: 150,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: '#B3BFEB'
  },
  bodyContainer: {
    '& textarea': {},
    '& .MuiFilledInput-root:hover': {
      backgroundColor: '#F2F2F2'
    },
    '& .MuiInputBase-inputMultiline': {
      height: '185px !important'
    },
    '& .MuiFilledInput-input': {
      padding: '20px 31px'
    },
    '& .MuiButton-contained:hover': {
      backgroundColor: 'white'
    },
    '& .MuiFormControl-root': {
      minWidth: 596,
      marginBottom: 25,
      backgroundColor: 'white',
      borderRadius: 15
    },
    '& .MuiInputBase-root': {
      color: '#B3BFEB',
      backgroundColor: 'white',
      borderRadius: 15
    },
    '& .MuiFormLabel-root': {
      color: '#B3BFEB',
      paddingLeft: 20,
      marginTop: 3
    },
    '& .MuiFilledInput-multiline': {
      padding: 0
    },
    '& .MuiFilledInput-underline:after': {
      borderBottom: 'none'
    },
    '& .MuiFilledInput-underline:hover:before': {
      borderBottom: 'none'
    },
    '& .MuiFilledInput-underline:before': {
      borderBottom: 'none'
    },
    '& .MuiButtonBase-root': {
      background: 'white',
      border: 'none',
      borderRadius: 15,
      boxShadow: 'none',
      padding: '24px 78px',
      color: '#B3BFEB'
    },
    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
      display: 'none'
    },
    '& .MuiAlert-root': {
      borderRadius: 15,
      '&:focus': {
        outline: 'none'
      }
    },
    '& .MuiAlert-filledSuccess': {
      color: '#B3BFEB',
      backgroundColor: 'white'
    }
  },
  outerContainer: {
    backgroundColor: '#B3BFEB',
    '& p': {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 56,
      lineHeight: '28px'
    },
    '& h3': {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      lineHeight: '28px'
    }
  },
  containerInner: {
    maxWidth: 850,
    textAlign: 'justify',
    textJustify: 'inter-word'
  },

  heading: {
    fontSize: 36,
    lineHeight: '42px',
    marginRight: 70,
    [theme.breakpoints.down('lg')]: {
      marginRight: 0,
      textAlign:'left',
    },
    padding: 0,
    textAlign: 'center',
    fontWeight: 'bold',
    '& span': {
      color: 'white'
    }
  },
  headerIcon: {
    width: 80
  }
}));

const PageTemplate = ({ title, children }) => {
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
            <Box pb={7}>
              <Typography className={classes.heading} component='span'>
                {title}
              </Typography>
            </Box>
            <Box className={classes.bodyContainer}>{children}</Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PageTemplate;
