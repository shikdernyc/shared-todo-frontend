import React from 'react';
import { Redirect } from 'react-router-dom';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from 'components/Navbars/Navbar';
import Sidebar from 'components/Sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';

import styles from 'assets/jss/material-dashboard-react/layouts/adminStyle';
import bgImage from 'assets/img/sidebar-2.jpg';
import logo from 'assets/img/reactlogo.png';

import { APP_NAME } from 'variables/app';
import Home from './home';
import sidebarRoutes from './sidebar_routes';

let ps;

const useStyles = makeStyles(styles);

// const Sidebars;

export default function User({ ...rest }) {
  // styles
  const classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  const mainPanel = React.createRef();
  // states and functions
  const [image] = React.useState(bgImage);
  const [color] = React.useState('blue');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  React.useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener('resize', resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
      window.removeEventListener('resize', resizeFunction);
    };
  }, [mainPanel]);
  return (
    <div className={classes.wrapper}>
      {console.log('hre')}
      <Sidebar
        routes={sidebarRoutes}
        logoText={APP_NAME}
        logo={logo}
        logoLink="/"
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
        {...rest}
      />
      <div className={classes.mainPanel} ref={mainPanel}>
        <Navbar
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            {/* <h1>
              Hello World
            </h1> */}
            <Switch>
              <Route path={`${rest.match.url}home`} component={Home} />
              <Redirect to={`${rest.match.url}home`} exact from={`${rest.match.url}`} />
              <Redirect to="/error/404" />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}
