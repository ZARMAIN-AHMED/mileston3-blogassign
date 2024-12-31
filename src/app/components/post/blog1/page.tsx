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
        src="/gem.jpg"
        alt="First Blog Post"
        className=" object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold">The latest AI news we announced in December</h1>
      <p className="mt-4 text-gray-700">
      Here’s a recap of some of our biggest AI updates from December, including the release of Gemini 2.0, Google DeepMind’s state-of-the-art weather prediction model GenCast, and Willow — our quantum chip that delivers a major breakthrough in quantum computing.
      </p>
      <br/>
      <p >a text card reading "The big picture"
The agentic era of AI is here. Over the past year, we’ve been investing in developing more agentic models — which can understand more about the environment around you and take action on your behalf with your supervision. This month we released Gemini 2.0, our most capable model yet, with agentic capabilities for developers, enterprises and people everywhere. We also introduced a range of experimental models for developers to explore, including gemini-exp-1206 in AI Studio and Gemini Advanced, and an experimental “thinking” version of Gemini 2.0.

These advancements bring us closer to our vision for a universal AI assistant, to make information even more accessible for everyone. Because information is at the core of human progress — and we’ll continue to push the frontiers of AI to organize that information, and make it truly useful for all.

a text card reading "Building state-of-the-art AI video and image generation"
We released our latest AI video and image generation models — Veo 2 and Imagen 3. These newest model versions achieved state-of-the-art results against leading models in head-to-head comparisons judged by human raters. Veo 2, in particular, now has a better understanding of real-world physics — so it can produce incredibly high-quality videos, with improved detail and realism overall. These models are now available in VideoFX, ImageFX and our newest Labs experiment, Whisk.

a text card reading "Building AI for deeper insights into the world around us"
We gave NotebookLM a major upgrade, including a new look, new features like the ability to “join” Audio Overviews to speak to the hosts, and a premium version, NotebookLM Plus. And fans of Spotify Wrapped got a new treat with their first-ever 2024 Spotify Wrapped AI podcast, built with NotebookLM.

We added new AI features to Android and Pixel. We dropped tons of new AI-powered features for Android and Pixel this December — including easier photo navigation and sharing, updates to make Call Screen easier, enhanced scans of docs in Google Drive and audio captions that capture the emotion and intensity of how someone is speaking.

Building AI to supercharge business productivity and performance
We shared five AI trends for businesses in 2025. Our prediction? AI is poised to improve enterprise security, enterprise searches and customer experiences, and businesses of all sizes will be able to use AI agents to simplify complex tasks.

Speaking of: We also introduced a new space for AI agents in Google Cloud. Google Agentspace will help companies increase their employees’ productivity by bringing together AI agents, Gemini’s advanced reasoning, Google-quality search, and enterprise data in one place. Plus, Cloud announced that Veo and Imagen 3 are available for businesses on Vertex AI.

a text card reading "Building AI for deeper insights into the weather"
Google DeepMind launched a new AI weather model, GenCast, that improves predictions. GenCast dramatically advances the field of predicting weather uncertainties and risks, delivering faster, more accurate forecasts up to 15 days ahead. More accurate forecasts of extreme weather can help officials safeguard lives and avert damage to important infrastructure — so we’ve made GenCast an open model, to foster wider collaboration and help accelerate research and development in the weather and climate community.

a text card reading "Building at the intersection of quantum computing and AI
We unveiled Willow, our state-of-the-art quantum chip. Willow represents a major breakthrough in quantum computing. It cracks a key challenge in quantum error correction that the field has pursued for almost 30 years, while also performing a benchmark computation in 5 minutes that would take one of the world’s fastest supercomputers 10 septillion years (which is greater than the age of the universe). Advanced AI may significantly benefit from access to quantum computing — and as we’ve now reached an exciting milestone in the Gemini era this month, we’re looking forward to continuing to explore the possibilities of these transformational technologies.</p>

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
