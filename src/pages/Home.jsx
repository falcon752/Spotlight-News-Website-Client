// components/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BsPerson, BsClock, BsChatDots, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Relational Data
import { posts, categories, authors } from "../store/mockData";

// Utility to enrich posts with category + author details
const getEnrichedPosts = () =>
  posts.map((post) => {
    const category = categories.find((c) => c.id === post.categoryId);
    const author = authors.find((a) => a.id === post.authorId);

    return {
      ...post,
      categoryName: category?.name || "Uncategorized",
      categorySlug: category?.slug || "uncategorized",
      authorName: author?.name || "Unknown",
      authorImg: author?.avatar || "",
    };
  });

const Home = () => {
  const enrichedPosts = getEnrichedPosts();

  // Featured posts = first 3 posts
  const featuredPostsData = enrichedPosts.slice(0, 3);
  // List posts = rest of posts
  const listPosts = enrichedPosts.slice(3);

  return (
    <>
      {/* BLOG HERO */}
      <section id="blog-hero" className="blog-hero section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="blog-grid">
            {/* Featured Hero Post */}
            {enrichedPosts[0] && (
              <article className="blog-item featured" data-aos="fade-up">
                <img
                  src={enrichedPosts[0].img}
                  alt={enrichedPosts[0].title}
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">{enrichedPosts[0].date}</span>
                    <span className="category">{enrichedPosts[0].categoryName}</span>
                  </div>
                  <h2 className="post-title">
                    <Link
                      to={`/category/${enrichedPosts[0].categorySlug}/${enrichedPosts[0].slug}`}
                    >
                      {enrichedPosts[0].title}
                    </Link>
                  </h2>
                </div>
              </article>
            )}

            {/* Next 4 small hero posts */}
            {enrichedPosts.slice(1, 5).map((post, idx) => (
              <article
                className="blog-item"
                data-aos="fade-up"
                data-aos-delay={100 * (idx + 1)}
                key={post.id}
              >
                <img src={post.img} alt={post.title} className="img-fluid" />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">{post.date}</span>
                    <span className="category">{post.categoryName}</span>
                  </div>
                  <h3 className="post-title">
                    <Link to={`/category/${post.categorySlug}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* END BLOG HERO */}

      {/* FEATURED POSTS */}
      <section id="featured-posts" className="featured-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Posts</h2>
          <div>
            <span>Check Our</span>{" "}
            <span className="description-title">Featured Posts</span>
          </div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            speed={800}
            autoplay={{ delay: 5000 }}
            slidesPerView={3}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {featuredPostsData.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blog-post-item">
                  <img src={post.img} alt={post.title} />
                  <div className="blog-post-content">
                    <div className="post-meta">
                      <span>
                        <BsPerson /> {post.authorName}
                      </span>
                      <span>
                        <BsClock /> {post.date}
                      </span>
                      <span>
                        <BsChatDots /> {post.comments} Comments
                      </span>
                    </div>
                    <h2>
                      <Link to={`/category/${post.categorySlug}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p>{post.desc}</p>
                    <Link
                      to={`/category/${post.categorySlug}/${post.slug}`}
                      className="read-more"
                    >
                      Read More <BsArrowRight />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* END FEATURED POSTS */}

      {/* CATEGORY SECTION */}
      <section id="category-section" className="category-section section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Category Section</h2>
          <div>
            <span className="description-title">Category Section</span>
          </div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          {/* Featured Category Posts */}
          <div className="row gy-4 mb-4">
            {featuredPostsData.map((post) => (
              <div className="col-lg-4" key={post.id}>
                <article className="featured-post">
                  <div className="post-img">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="post-content">
                    <div className="category-meta">
                      <span className="post-category">{post.categoryName}</span>
                      <div className="author-meta">
                        <img
                          src={post.authorImg}
                          alt={post.authorName}
                          className="author-img"
                        />
                        <span className="author-name">{post.authorName}</span>
                        <span className="post-date">{post.date}</span>
                      </div>
                    </div>
                    <h2 className="title">
                      <Link to={`/category/${post.categorySlug}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* List Posts */}
          <div className="row">
            {listPosts.map((post) => (
              <div className="col-xl-4 col-lg-6" key={post.id}>
                <article className="list-post">
                  <div className="post-img">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="post-content">
                    <div className="category-meta">
                      <span className="post-category">{post.categoryName}</span>
                    </div>
                    <h3 className="title">
                      <Link to={`/category/${post.categorySlug}/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <div className="post-meta">
                      <span className="read-time">{post.readTime}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END CATEGORY SECTION */}

      {/* LATEST POSTS */}
      <section id="latest-posts" className="latest-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Latest Posts</h2>
          <div>
            <span>Check Our</span>{" "}
            <span className="description-title">Latest Posts</span>
          </div>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {enrichedPosts.slice(-3).map((post) => (
              <div className="col-lg-4" key={post.id}>
                <article>
                  <div className="post-img">
                    <img src={post.img} alt={post.title} className="img-fluid" />
                  </div>
                  <p className="post-category">{post.categoryName}</p>
                  <h2 className="title">
                    <Link to={`/category/${post.categorySlug}/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <div className="d-flex align-items-center">
                    <img
                      src={post.authorImg}
                      alt={post.authorName}
                      className="img-fluid post-author-img flex-shrink-0"
                    />
                    <div className="post-meta">
                      <p className="post-author">{post.authorName}</p>
                      <p className="post-date">
                        <time dateTime={post.date}>{post.date}</time>
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END LATEST POSTS */}
    </>
  );
};

export default Home;
