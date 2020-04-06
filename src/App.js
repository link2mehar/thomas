import React from 'react';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import HomeBannerFirstImage from './assets/illustration.png';
import AndroidImageWhite from './assets/android_white.svg';
import IosImageWhite from './assets/ios_white.svg';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Banner from './components/banner/banner';
import Tip from './components/tip/tip';
import PromoteReward from './components/PromoteReward/promote-reward';
import ShareDiscover from './components/ShareDiscover/share-discover';
import YoutubePromo from './components/YoutubePromo/youtube-promo';
import About from './page/about';
import Terms from './page/terms';
import Contact from './page/contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



const theme = createMuiTheme({
  overrides: {
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    },
    
  }
});
const useStyles = makeStyles(theme => ({
  mTop:{
    [theme.breakpoints.down('lg')]: {
      marginTop:'150px'
    }
  }
}))
function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      
        <Router>
          <div className={classes.mTop}>
            <Header />
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route path='/terms'>
                <Terms />
              </Route>
              <Route path='/'>
                <Banner
                  rightImage={HomeBannerFirstImage}
                  subtitleImageOne={IosImageWhite}
                  subtitleImageTwo={AndroidImageWhite}
                />
                <YoutubePromo
                  secondary
                  url='https://www.youtube.com/embed/MfAm-t2aMWc?&autoplay=0'
                />
                <ShareDiscover primary />
                <PromoteReward secondary />

                <Tip />
              </Route>
            </Switch>
            <Footer />
          </div>
        </Router>
    </ThemeProvider>
  );
}

export default App;
