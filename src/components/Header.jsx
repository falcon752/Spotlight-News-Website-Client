import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsSearch, BsChevronDown, BsList } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // current path

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate("/search-results");
  };

  // List of category slugs for dropdown
  const categorySlugs = ["investigation", "lifestyle", "fact-check"];

  // Dropdown active only if a child link matches current path
  const isCategoryActive = categorySlugs.some(
    slug => location.pathname === `/category/${slug}`
  );

  return (
    <header id="header" className="header position-relative">
      <div className="container-fluid container-xl position-relative">
        <div className="top-row d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-end">
            <h1 className="sitename">Spotlight</h1>
            <span>.</span>
          </NavLink>

          <div className="d-flex align-items-center">
            <div className="social-links">
              <a href="#" className="facebook"><BsFacebook /></a>
              <a href="#" className="twitter"><BsTwitter /></a>
              <a href="#" className="instagram"><BsInstagram /></a>
            </div>

            <form className="search-form ms-4">
              <input type="text" placeholder="Search..." className="form-control" />
              <button type="submit" className="btn" onClick={handleSearchClick}><BsSearch /></button>
            </form>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container d-flex justify-content-center position-relative">
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined} end>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/category/news"
                  className={({ isActive }) => isActive ? "active" : undefined}
                >
                  News
                </NavLink>
              </li>

              <li className={`dropdown ${isCategoryActive ? "active" : ""}`}>
                <NavLink
                  to="#"
                  className={({ isActive }) => undefined} // parent never active
                >
                  <span>Categories</span> <BsChevronDown className="toggle-dropdown" />
                </NavLink>
                <ul>
                  {categorySlugs.map(slug => (
                    <li key={slug}>
                      <NavLink
                        to={`/category/${slug}`}
                        className={({ isActive }) => isActive ? "active" : undefined}
                      >
                        {slug.charAt(0).toUpperCase() + slug.slice(1).replace("-", " ")}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink
                  to="/category/impacts"
                  className={({ isActive }) => isActive ? "active" : undefined}
                >
                  Impacts
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? "active" : undefined}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            <span className="mobile-nav-toggle d-xl-none"><BsList /></span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
