'use client'
import Image from "next/image";
import { useState } from "react";

const Blog1 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image
      height={100}
      width={900}
        src="/gem2.jpeg"
        alt="First Blog Post"
        className="  object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold">Introducing Gemini 2.0: our new AI model for the agentic era</h1>
      <p className="mt-4 text-gray-700">
       
      By Demis Hassabis, CEO of Google DeepMind and Koray Kavukcuoglu, CTO of Google DeepMind on behalf of the Gemini team

Over the past year, we have continued to make incredible progress in artificial intelligence. Today, we are releasing the first model in the Gemini 2.0 family of models: an experimental version of Gemini 2.0 Flash. It’s our workhorse model with low latency and enhanced performance at the cutting edge of our technology, at scale.

We are also sharing the frontiers of our agentic research by showcasing prototypes enabled by Gemini 2.0’s native multimodal capabilities.
      </p><br/>
      <h1 className="text-3xl font-bold">Gemini 2.0 Flash</h1><br/>
      <p>Gemini 2.0 Flash builds on the success of 1.5 Flash, our most popular model yet for developers, with enhanced performance at similarly fast response times. Notably, 2.0 Flash even outperforms 1.5 Pro on key benchmarks, at twice the speed. 2.0 Flash also comes with new capabilities. In addition to supporting multimodal inputs like images, video and audio, 2.0 Flash now supports multimodal output like natively generated images mixed with text and steerable text-to-speech (TTS) multilingual audio. It can also natively call tools like Google Search, code execution as well as third-party user-defined functions.</p>
<p>A chart comparing Gemini models and their capabilities
Our goal is to get our models into people’s hands safely and quickly. Over the past month, we’ve been sharing early, experimental versions of Gemini 2.0, getting great feedback from developers.

Gemini 2.0 Flash is available now as an experimental model to developers via the Gemini API in Google AI Studio and Vertex AI with multimodal input and text output available to all developers, and text-to-speech and native image generation available to early-access partners. General availability will follow in January, along with more model sizes.

To help developers build dynamic and interactive applications, we’re also releasing a new Multimodal Live API that has real-time audio, video-streaming input and the ability to use multiple, combined tools. More information about 2.0 Flash and the Multimodal Live API can be found in our developer blog.

Gemini 2.0 available in Gemini app, our AI assistant
Also starting today, Gemini users globally can access a chat optimized version of 2.0 Flash experimental by selecting it in the model drop-down on desktop and mobile web and it will be available in the Gemini mobile app soon. With this new model, users can experience an even more helpful Gemini assistant.

Early next year, we’ll expand Gemini 2.0 to more Google products.</p><br/>
<h1 className="text-3xl font-bold">Unlocking agentic experiences with Gemini 2.0</h1><br/>
<p>Gemini 2.0 Flash’s native user interface action-capabilities, along with other improvements like multimodal reasoning, long context understanding, complex instruction following and planning, compositional function-calling, native tool use and improved latency, all work in concert to enable a new class of agentic experiences.

The practical application of AI agents is a research area full of exciting possibilities. We’re exploring this new frontier with a series of prototypes that can help people accomplish tasks and get things done. These include an update to Project Astra, our research prototype exploring future capabilities of a universal AI assistant; the new Project Mariner, which explores the future of human-agent interaction, starting with your browser; and Jules, an AI-powered code agent that can help developers.

We’re still in the early stages of development, but we’re excited to see how trusted testers use these new capabilities and what lessons we can learn, so we can make them more widely available in products in the future.</p>
      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="w-full border rounded-lg p-2"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Add Comment
          </button>
        </div>
        <div className="mt-6">
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog1;
