// src/data/mockData.js

// =====================
// Categories
// =====================
export const categories = [
  { id: 1, name: "Investigation", slug: "investigation" },
  { id: 2, name: "News", slug: "news" },
  { id: 3, name: "Fact Check", slug: "fact-check" },
  { id: 4, name: "Lifestyle", slug: "lifestyle" },
  { id: 5, name: "Impacts", slug: "impacts" },
];

// =====================
// Authors
// =====================
export const authors = [
  { id: 1, name: "Julia Parker", avatar: "/assets/img/person/person-f-12.webp", slug: "julia-parker" },
  { id: 2, name: "Mark Wilson", avatar: "/assets/img/person/person-m-10.webp", slug: "mark-wilson" },
  { id: 3, name: "Sarah Johnson", avatar: "/assets/img/person/person-f-15.webp", slug: "sarah-johnson" },
];

// =====================
// Posts
// =====================
export const posts = [
  {
    id: 1,
    categoryId: 1, // Investigation
    authorId: 1,   // Julia Parker
    slug: "uncovering-hidden-scandals",
    img: "/assets/img/blog/blog-post-portrait-1.webp",
    title: "Uncovering Hidden Scandals",
    desc: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    date: "Jan 15, 2025",
    comments: 6,
    readTime: "3 mins",
  },
  {
    id: 2,
    categoryId: 2, // News
    authorId: 2,   // Mark Wilson
    slug: "breaking-down-new-education-reforms",
    img: "/assets/img/blog/blog-post-portrait-2.webp",
    title: "Breaking Down New Education Reforms",
    desc: "Maecenas tempus tellus eget condimentum rhoncus quam semper libero sit amet.",
    date: "Jan 18, 2025",
    comments: 4,
    readTime: "2 mins",
  },
  {
    id: 3,
    categoryId: 3, // Fact Check
    authorId: 3,   // Sarah Johnson
    slug: "separating-truth-from-viral-misinformation",
    img: "/assets/img/blog/blog-post-portrait-3.webp",
    title: "Separating Truth From Viral Misinformation",
    desc: "Nullam dictum felis eu pede mollis pretium integer tincidunt. Cras dapibus.",
    date: "Jan 21, 2025",
    comments: 12,
    readTime: "4 mins",
  },
  {
    id: 4,
    categoryId: 4, // Lifestyle
    authorId: 2,   // Mark Wilson
    slug: "healthy-habits-for-modern-living",
    img: "/assets/img/blog/blog-post-portrait-4.webp",
    title: "Healthy Habits for Modern Living",
    desc: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    date: "Feb 2, 2025",
    comments: 8,
    readTime: "5 mins",
  },
  {
    id: 5,
    categoryId: 5, // Impacts
    authorId: 1,   // Julia Parker
    slug: "understanding-global-economic-shifts",
    img: "/assets/img/blog/blog-post-portrait-5.webp",
    title: "Understanding Global Economic Shifts",
    desc: "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.",
    date: "Feb 10, 2025",
    comments: 10,
    readTime: "6 mins",
  },
];
