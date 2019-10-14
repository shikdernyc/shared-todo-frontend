import React from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
  unstyled: {
    textDecoration: 'none'
  },
  white: {
    color: 'white'
  }
});

const NavLink = props => {
  const { unstyled, className, children, ...rest } = props;
  const classes = useStyles();
  const navlinkClasses = classNames({
    [classes.unstyled]: unstyled,
    [classes.white]: true
  });

  return (
    <RRDNavLink className={`${navlinkClasses}  ${className}`} {...rest} >
      {children}
    </RRDNavLink>
  );
};

NavLink.defaultProps = {
  unstyled: false,
  className: ''
};

NavLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]).isRequired,
  unstyled: PropTypes.bool,
  className: PropTypes.string
};

export default NavLink;