import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { posts, categories, authors } from "../store/mockData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get("query")?.toLowerCase() || "";

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return [];
    return posts.filter((post) => {
      const category = categories.find((c) => c.id === post.categoryId);
      const author = authors.find((a) => a.id === post.authorId);
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.desc.toLowerCase().includes(searchTerm) ||
        category?.name.toLowerCase().includes(searchTerm) ||
        author?.name.toLowerCase().includes(searchTerm)
      );
    });
  }, [searchTerm]);

  const pageTitle = searchTerm
    ? `Search results for "${searchTerm}" | Spotlight`
    : "Search | Spotlight";

  return (
    <main className="main">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <div className="page-title">
        <div className="breadcrumbs">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house"></i> Home</Link></li>
              <li className="breadcrumb-item active current">Search Results</li>
            </ol>
          </nav>
        </div>

        <div className="title-wrapper">
          <h1>Search Results</h1>
          <p>
            {filteredPosts.length > 0
              ? `We found ${filteredPosts.length} result${filteredPosts.length > 1 ? "s" : ""} for "${searchTerm}"`
              : `No results found for "${searchTerm}"`}
          </p>
        </div>
      </div>

      <section className="search-results-posts section">
        <div className="container">
          <div className="row gy-4">
            {filteredPosts.map((post) => {
              const category = categories.find((c) => c.id === post.categoryId);
              const author = authors.find((a) => a.id === post.authorId);
              return (
                <div className="col-lg-4" key={post.id}>
                  <article>
                    <div className="post-img">
                      <img src={post.img} alt={post.title} className="img-fluid" />
                    </div>
                    <p className="post-category">{category?.name}</p>
                    <h2 className="title">
                      <Link to={`/category/${category?.slug}/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <div className="d-flex align-items-center">
                      <img src={author?.avatar} alt={author?.name} className="img-fluid post-author-img flex-shrink-0" />
                      <div className="post-meta">
                        <p className="post-author">{author?.name}</p>
                        <p className="post-date"><time dateTime={post.date}>{post.date}</time></p>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
            {filteredPosts.length === 0 && <p className="text-center">Try searching for another keyword.</p>}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SearchResults;
