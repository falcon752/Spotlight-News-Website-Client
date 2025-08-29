// components/BlogDetails.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import SideBar from "../components/SideBar"
import { Helmet } from "react-helmet-async";


import { posts, categories, authors } from "../store/mockData";


const BlogDetails = () => {
    const { categorySlug, postSlug } = useParams();

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    // Find the post matching the slug
    const post = posts.find((p) => p.slug === postSlug);
    if (!post) {
        return (
            <main className="main">
                <div className="container">
                    <h2>Post not found</h2>
                    <Link to="/">Go back home</Link>
                </div>
            </main>
        );
    }

    // Get category and author info
    const category = categories.find((c) => c.id === post.categoryId);
    const author = authors.find((a) => a.id === post.authorId);

    return (
        <>
            <Helmet>
                <title>{post.title} | Spotlight</title>
            </Helmet>

            <main className="main">
                {/* Page Title */}
                <div className="page-title">
                    <div className="breadcrumbs">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">
                                        <i className="bi bi-house"></i> Home
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to={`/${category?.slug}`}>{category?.name}</Link>
                                </li>
                                <li className="breadcrumb-item active current">{post.title}</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="title-wrapper">
                        <h1>{post.title}</h1>
                        <p>{post.desc}</p>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        {/* Main Blog Content */}
                        <div className="col-lg-8">
                            <section id="blog-details" className="blog-details section">
                                <div className="container" data-aos="fade-up">
                                    <article className="article">
                                        {/* Featured Image */}
                                        <div className="hero-img" data-aos="zoom-in">
                                            <img
                                                src={post.img}
                                                alt={post.title}
                                                className="img-fluid"
                                                loading="lazy"
                                            />
                                            <div className="meta-overlay">
                                                <div className="meta-categories">
                                                    <Link to={`/${category?.slug}`} className="category">
                                                        {category?.name}
                                                    </Link>
                                                    <span className="divider">•</span>
                                                    <span className="reading-time">
                                                        <i className="bi bi-clock"></i> {post.readTime}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Blog Article Content */}
                                        <div className="article-content" data-aos="fade-up" data-aos-delay="100">
                                            <div className="content-header">
                                                <div className="author-info">
                                                    <div className="author-details">
                                                        <img
                                                            src={author?.avatar}
                                                            alt={author?.name}
                                                            className="author-img"
                                                        />
                                                        <div className="info">
                                                            <h4>{author?.name}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="post-meta">
                                                        <span className="date">
                                                            <i className="bi bi-calendar3"></i> {post.date}
                                                        </span>
                                                        <span className="divider">•</span>
                                                        <span className="comments">
                                                            <i className="bi bi-chat-text"></i> {post.comments} Comments
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Blog text */}
                                            <p className="lead">{post.desc}</p>
                                            {/* Add more content if needed */}
                                        </div>
                                    </article>
                                </div>
                            </section>
                        </div>


                        <SideBar />
                    </div>
                </div>
            </main>
        </>
    );
};

export default BlogDetails;
