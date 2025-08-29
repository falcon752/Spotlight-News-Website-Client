import React from "react";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/"><i className="bi bi-house"></i> Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/category">Category</Link>
              </li>
              <li className="breadcrumb-item active current">Search Results</li>
            </ol>
          </nav>
        </div>

        <div className="title-wrapper">
          <h1>Search Results</h1>
          <p>
            We found <strong>44</strong> results for your search term{" "}
            <strong>search term</strong>
          </p>
        </div>
      </div>

      {/* Search Results Posts Section */}
      <section id="search-results-posts" className="search-results-posts section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Example Post - map dynamic later */}
            <div className="col-lg-4">
              <article>
                <div className="post-img">
                  <img
                    src="assets/img/blog/blog-post-1.webp"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <p className="post-category">Politics</p>

                <h2 className="title">
                  <Link to="/blog/1">
                    Dolorum optio tempore voluptas dignissimos
                  </Link>
                </h2>

                <div className="d-flex align-items-center">
                  <img
                    src="assets/img/person/person-f-12.webp"
                    alt=""
                    className="img-fluid post-author-img flex-shrink-0"
                  />
                  <div className="post-meta">
                    <p className="post-author">Maria Doe</p>
                    <p className="post-date">
                      <time dateTime="2022-01-01">Jan 1, 2022</time>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* Repeat posts dynamically */}
          </div>
        </div>
      </section>

      {/* Pagination Section */}
      <section id="pagination-3" className="pagination-3 section">
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul>
              <li><a href="#"><i className="bi bi-chevron-left"></i></a></li>
              <li><a href="#">1</a></li>
              <li><a href="#" className="active">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li>...</li>
              <li><a href="#">10</a></li>
              <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchResults;
