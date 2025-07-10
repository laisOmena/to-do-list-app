import React from 'react';
import './Head.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a>
            <h1>Lista de livros</h1>
          </a>
        </li>
        <li>
          <a>
            <h1>Em andamento</h1>
          </a>
        </li>
        <li>
          <a>
            <h1>Dropei</h1>
          </a>
        </li>
        <li>
          <a>
            <h1>Melhores</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
