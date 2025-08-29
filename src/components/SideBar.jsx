// components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { posts, categories } from "../store/mockData";

const Sidebar = () => {
  return (
    <div className="col-lg-4 sidebar">
      <div className="widgets-container" data-aos="fade-up" data-aos-delay="200">
        {/* Search Widget */}
        <div className="search-widget widget-item">
          <h3 className="widget-title">Search</h3>
          <form action="">
            <input type="text" placeholder="Search..." />
            <button type="submit" title="Search">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        {/* Categories Widget */}
        <div className="categories-widget widget-item">
          <h3 className="widget-title">Categories</h3>
          <ul className="mt-3">
            {categories.map((cat) => (
              <li key={cat.id}>
                <Link to={`/category/${cat.slug}`}>
                  {cat.name} <span>({posts.filter((p) => p.categoryId === cat.id).length})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
