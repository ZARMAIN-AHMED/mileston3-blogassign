import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogList = () => {
  // Example blog data with images
  const blogs = [
    {
      slug: "/blog1",
      title: "Gemini 2.0     ",
      excerpt: "The latest AI news we announced in December.       ",
      image: "/gem.jpg",
    },
    {
      slug: "/blog2",
      title: "321 real-world gen AI use cases",
      excerpt: " 321 real-world gen AI use cases from the world's leading organizations.",
      image: "/gen.png",
    },
    {
      slug: "/blog3",
      title: "Introducing Gemini 2.0",
      excerpt: "Introducing Gemini 2.0: our new AI model for the agentic era.",
      image: "/gem2.jpeg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Link href={`/components/post/${blog.slug}`} key={blog.slug} className="border rounded-lg overflow-hidden shadow-md">
            <Image
            height={100}
            width={200}
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;























// import { useState } from "react";

// const BlogPost = () => {
//   // Blog Post Content
//   const blog = { title: "Sample Blog Post", content: "This is a sample blog post." };

//   // State for comments
//   const [comments, setComments] = useState<string[]>([]);
//   const [newComment, setNewComment] = useState("");

//   const handleAddComment = () => {
//     if (newComment.trim()) {
//       setComments([...comments, newComment.trim()]);
//       setNewComment("");
//     }
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold">{blog.title}</h1>
//       <p className="mt-4 text-gray-700">{blog.content}</p>

//       {/* Comments Section */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold">Comments</h2>
//         <ul className="mt-4 space-y-2">
//           {comments.map((comment, index) => (
//             <li key={index} className="bg-gray-100 p-2 rounded">
//               {comment}
//             </li>
//           ))}
//         </ul>
//         <div className="mt-4 flex">
//           <input
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             placeholder="Write a comment..."
//             className="flex-grow p-2 border rounded-l focus:outline-none"
//           />
//           <button
//             onClick={handleAddComment}
//             className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
//           >
//             Add Comment
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPost;
