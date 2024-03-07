import React, { useState } from "react";
import Head from "./Head";
import "./header.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { Link, useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const [navbar, setNavbar] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const encodedTerm = encodeURIComponent(searchTerm);
    const path = `/search/${encodedTerm}`;

    history.push(path);
  };

  return (
    <>
      <Head />
      <header>
        <div className="container paddingSmall">
          <nav>
            <ul
              className={navbar ? "navbar" : "flex"}
              onClick={() => setNavbar(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search/culture">Culture</Link>
              </li>
              <li>
                <Link to="/search/politics">Politics</Link>
              </li>
              <li>
                <Link to="/search/memes">Memes</Link>
              </li>
              <li>
                <Link to="/search/sports">Sports</Link>
              </li>
              <li>
                <Link to="/search/boxed">Boxed</Link>
              </li>
              <li>
                <Link to="/search/reviews">Reviews</Link>
              </li>
            </ul>
            <button className="barIcon" onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
              <button type="button" className="search-button" onClick={handleSearch}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
