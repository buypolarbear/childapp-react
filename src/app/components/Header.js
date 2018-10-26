import React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {LINKS.map(item => (
            <li key={item.name}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
