
import Link from "next/link";

const BlogList = () => {
  // Example blog data
  const blogs = [
    { slug: "/blog1", title: "First Blog Post", content: "This is the first post." },
    { slug: "/blog2", title: "Second Blog Post", content: "This is the second post." },
    { slug: "/blog3", title: "Third Blog Post", content: "This is the third post."  },
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/post/${blog.slug}`}>
              <span className="text-blue-500 hover:underline">{blog.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
