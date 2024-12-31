'use client'
import Image from "next/image";


import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Mock data for dynamic content
  const blogData: Record<string, { title: string; content: string; image: string }> = {
    "/blog1": {
      title: "First Blog Post",
      content: "321 real-world gen AI use cases from the world's leading organizations.",
      image: "/gem.jpg",
      
    },
    "/blog2": {
      title: "Second Blog Post",
      content: "Detailed content of the second post.",
      image: "/gen.png",
    },
    "/blog3": {
      title: "Third Blog Post",
      content: "Detailed content of the third post.",
      image: "/gem2.jpeg",
    },
  };

  if (!slug || typeof slug !== "string") {
    return <div>Loading...</div>;
  }

  const blog = blogData[slug];

  if (!blog) {
    return <div className="text-center text-red-500">Post not found.</div>;
  }

  return (

    <div className="max-w-4xl mx-auto p-4">
  
      <Image
      height={100}
      width={200}
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.content}</p>
     
    </div>
  );
};

export default BlogPost;
