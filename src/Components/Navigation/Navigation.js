import React from 'react';
import { NavLink } from 'react-router-dom';

import { menuItemsMap } from '@Routes/mapRolesToMenu';

import './Navigation.scss';

export const Navigation = () => {
  const renderMenuItems = () => {
    return menuItemsMap.map((menuItem) => {
      const { key, icon } = menuItem;

      return (
        <NavLink
          key={key}
          activeClassName="is-active"
          to={`/${key}`}
          className="navigation-item"
        >
          {icon}
        </NavLink>
      );
    });
  };

  return <nav className="navigation">{renderMenuItems()}</nav>;
};

export default Navigation;
