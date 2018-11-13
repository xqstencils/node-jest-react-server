import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.scss';

const HomePage = () => (
  <div className={styles.home}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/hello">Hello</Link>
      </li>
    </ul>
  </div>
);

export default HomePage;
