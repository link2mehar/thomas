import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import RouterLink from 'react-router-dom/Link';
import { useRouteMatch } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  links: {
    fontSize: 24,
    fontWeight: 'bold',
    '& a': {
      color: 'white',
      textDecoration: 'none'
    },
    '& a:hover, a:active, a:focus': {
      color: 'black',
      textDecoration: 'none'
    },
    '& * + *': {
      marginLeft: theme.spacing(4)
    },
    [theme.breakpoints.down('md')]: {
      opacity: '0',
      marginRight: '100px',
      transition: '.5s ease-in-out'
    }
  },
  mmenu:{
    [theme.breakpoints.up('md')]: {
      opacity: '0',
      transition: '.5s ease-in-out'
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '40px 70px',
    backgroundColor: '#B3BFEB',
    boxSizing:'border-box',
    [theme.breakpoints.down('md')]: {
      top: 0,
      width: '100%',
      overflow: 'hidden',
      zIndex: 1,
      position: 'fixed',
      backgroundColor: '#b3bfeb'

    }
  },
  brandName: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
    '& a': {
      textDecoration: 'none',
      color: 'white'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 80,
    }
  }
}));



const Header = () => {  
  const classes = useStyles();
  let { isExact: isHome } = useRouteMatch('/') || false;
  let { isExact: isAbout } = useRouteMatch('/about') || false;
  let { isExact: isContact } = useRouteMatch('/contact') || false;
  let { isExact: isTerms } = useRouteMatch('/terms') || false;




  const toggler = (e) =>{
    var x = document.getElementById("nav-icon3");
    x.classList.toggle('open');
    var y = document.getElementById("myLinks");
    if (y.style.opacity === "1") {
      y.style.opacity = "0";
    } else {
      y.style.opacity = "1";
    }
  }
 
 



  return (
    <header className={classes.header}>
      <div className={classes.brandName}>
        <RouterLink to='/'>Sinaps</RouterLink>
      </div>
      <div className="topnav">
        <div className={classes.links} id="myLinks">
          {!isHome && (
            <Link className="someClass">
              <RouterLink to='/'>Home</RouterLink>
            </Link>
          )}
          {!isContact && (
            <Link>
              <RouterLink to='/contact'>Contact</RouterLink>
            </Link>
          )}
          {!isAbout && (
            <Link>
              <RouterLink to='/about'>About</RouterLink>
            </Link>
          )}
          {!isTerms && (
            <Link>
              <RouterLink to='/terms'>Terms & Conditions</RouterLink>
            </Link>
          )}
          
        </div>
        <div id="nav-icon3" onClick={toggler} className={classes.mmenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
       
      </div>
      
    </header>
  );
};

export default Header;
