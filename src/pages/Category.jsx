import React from "react";
import { useParams, Link } from "react-router-dom";
import { posts, categories, authors } from "../store/mockData";
import SideBar from "../components/SideBar";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = categories.find(c => c.slug === categorySlug);
  const filteredPosts = category
    ? posts.filter(p => p.categoryId === category.id)
    : [];

  return (
    <div className="category-page">
      <main className="main">
        <div className="page-title position-relative">
          <div className="breadcrumbs">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/"><i className="bi bi-house"></i> Home</Link></li>
                <li className="breadcrumb-item active current">{category?.name || "Category"}</li>
              </ol>
            </nav>
          </div>
          <div className="title-wrapper">
            <h1>{category?.name || "Category"}</h1>
            <p>{category ? `All posts under ${category.name}` : "No category found."}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {/* Posts Section */}
            <div className="col-lg-8">
              <section id="category-postst" className="category-postst section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                  <div className="row gy-4">
                    {filteredPosts.length > 0 ? filteredPosts.map(post => {
                      const author = authors.find(a => a.id === post.authorId);
                      return (
                        <div className="col-lg-6" key={post.id}>
                          <article>
                            <div className="post-img">
                              <img src={post.img} alt={post.title} className="img-fluid" />
                            </div>
                            <p className="post-category">{category?.name}</p>
                            <h2 className="title">
                              <Link to={`/category/${category.slug}/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h2>
                            <div className="d-flex align-items-center">
                              <img
                                src={author?.avatar || ""}
                                alt={author?.name || "Author"}
                                className="img-fluid post-author-img flex-shrink-0"
                              />
                              <div className="post-meta">
                                <p className="post-author">{author?.name}</p>
                                <p className="post-date">
                                  <time dateTime={post.date}>{post.date}</time>
                                </p>
                              </div>
                            </div>
                          </article>
                        </div>
                      );
                    }) : <p>No posts in this category.</p>}
                  </div>
                </div>
              </section>

              {/* Pagination (optional, same structure as old) */}
              <section id="pagination-2" className="pagination-2 section">
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
            </div>

            {/* Sidebar */}
            <SideBar />

          </div>
        </div>
      </main>
    </div>
  );
}
