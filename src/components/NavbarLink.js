import React from 'react';
import {Link} from 'react-router';

import './NavbarLink.css';

const NavbarLink = (props) => {
    return (
      <Link { ...props } className="NavbarLink" activeClassName="NavbarLink--active"/>
    )
}

export default NavbarLink;
