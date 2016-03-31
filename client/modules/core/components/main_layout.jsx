import React from 'react';
import Menu from './menu.jsx';
const Layout = ({content = () => null }) => (
  <div>
    <Menu/>
    <div className="container">
      {content()}
    </div>
  </div>
);

export default Layout;
