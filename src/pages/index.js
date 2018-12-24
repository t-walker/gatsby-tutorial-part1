import React from 'react';
import { Link } from 'gatsby';

import Header from '../components/header';

export default () => (
  <div style={{ color: 'purple' }}>
    <Header headerText='Gatsby' />
    <h1>Hello Gatsby!</h1>
    <p>What a world!</p>
    <Link to='/about/'>About</Link>
    <Link to='/contact/'>Contact</Link>
  </div>
);
