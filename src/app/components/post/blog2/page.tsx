'use client'
import Image from "next/image";
import React from "react";
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
        src="/gen.png"
        alt="First Blog Post"
        className=" object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold">321 real-world gen AI use cases from the world s leading organizations</h1>
      <p className="mt-4 text-gray-700">
      This post originally appeared on the Transform with Google Cloud blog. It was first published April 12, 2024; last updated with new use cases December 19, 2024.

Earlier this month, Google released Gemini 2.0, ushering in the agentic era of AI. For many of our customers, they were already living it.

Even before we released Gemini 1.0 a year ago, organizations of all sizes across all industries were already building AI services and early forms of agents on Vertex AI and tapping into generative tools in Google Workspace. During Google Cloud Next ‘24, we first published this post as a showcase for 101 of the best use cases out of hundreds featured across the event. Then in September, for our Gemini at Work event, we featured another 84 examples from our customers. 

Today, we’re rounding out a year truly defined by AI with more than 135 fresh examples. And in addition to grouping them by agent type, we’ve now broken them out by industry, as well — we keep hearing from customers just how important it is to see the opportunities in their field.

What makes AI agents unique is that they can take actions to achieve specific goals, whether that’s guiding a shopper to the perfect pair of shoes, helping an employee looking for the right health benefits, or supporting nursing staff with smoother patient hand-offs during shifts changes.

In our work with customers, we see their teams are increasingly focused on improving productivity, automating processes, and modernizing the customer experience. These aims are now being achieved through the AI agents they’re developing in six key areas: customer service; employee empowerment; code
      </p>
<br/>
<h1 className="text-3xl font-bold">Customer agents</h1>
<br/>
<p>Retail & Consumer Goods
Best Buy is using Gemini to launch a generative AI-powered virtual assistant this summer that can troubleshoot product issues, reschedule order deliveries, manage Geek Squad subscriptions, and more; in-store and digital customer-service associates are also gaining gen-AI tools to better serve customers anywhere they need help. 
BrainLogic uses Anthropi s Claude models on Google Cloud Vertex AI to power Zapia, a personal AI assistant that caters to the Latin American market s preference for conversational commerce. Zapia supports millions of users with product discovery, local business searches, and purchase assistance, resulting in over 90% positive user feedback.
Cainz, a Japanese home improvement chain, is creating an autonomous, next-generation store where advanced AI technologies, including generative AI, merge the best of online and offline shopping to deliver a faster, seamless consumer experience. 
Carrefour Taiwan s AI Sommelier, a conversational AI integrated into its app, helps customers select wines based on their preferences. Powered by Gemini models, the AI leverages a vast wine database to provide personalized recommendations, seamlessly integrating online and offline shopping.
Dunelm has partnered with Google Cloud to enhance its online shopping experience with a new gen AI-driven product discovery solution. This has shown significant improvements in a number of key areas, including reduced search friction, helping customers find the products they are looking for.
Eezee found Gemini models to be the most reliable option for building its Southeast Asian B2B platform that connects small businesses with suppliers of industrial and construction materials.
Etsy uses Vertex AI training to optimize their search recommendations and ads models, delivering better listing suggestions to buyers and helping sellers grow their businesses.
GroupBy, an ecommerce service provider, developed an AI-first Search and Discovery Platform powered by Vertex AI Search for Retail. This solution is meticulously designed to optimize revenue, strengthen brand loyalty, and drive sales growth for B2C and B2B retailers.
Magalu, one of Brazil s largest retailers, has put customer service at the center of its AI strategy, including using Vertex AI to create “Lu s Brain” to power an interactive conversational agent for Lu, Magalu s popular brand persona (the 3D bot has more than 14 million followers between TikTok and Instagram).
Mercado Libre has incorporated semantic search into its digital shopping platforms, using AI embeddings from the Vertex AI Agent Builder, which greatly improved product recommendations and discoverability for more than 200 million consumers across Latin America.
Target uses Google Cloud to power AI solutions on the Target app and Target.com, including personalized Target Circle offers and Starbucks at Drive Up, their curbside pickup solution.
Tokopedia, an Indonesian ecommerce leader, is using Vertex AI to improve data quality, increasing unique products being sold by 5%.
Wendy’s FreshAI pairs Gemini’s conversational AI capability with audio and visual elements to create a deeply personalized and tailored experience that is consistent and enjoyable for Wendy’s customers by freeing workers to focus on excellent service and meal preparation — marking the next evolution in the quick-serve restaurants.</p>
     
     <br/>
     <h1 className="text-3xl font-bold">Data agents</h1><br/>
     <h1>Business & Professional Services</h1>
     <br/>
     <p>Gamuda Berhad, a Malaysian infrastructure and property management company, has integrated a Gemini-powered conversational agent into its cloud-based Tunnel Insight platform, providing faster information and insights during construction projects.
Glean builds on Vertex AI and BigQuery to deliver powerful, unified enterprise search across all workplace applications, websites, and data sources used within an enterprise, helping users find exactly what you need and discover the information you need to do their best work.
IPRally built a custom machine-learning platform that uses natural language processing on the text of more than 120 million global patent documents, creating an accurate, easily searchable database that adds more than 200,000 new sources a week.
Ipsos built a data analysis tool for its teams of market researchers, eliminating the need for time-consuming requests to data analysts, which is powered by Gemini 1.5 Pro and Flash models as well as Grounding with Google Search to enhance real-world accuracy from contemporaneous Search information.
Workday is using natural language processing in Vertex Search and Conversation to make data insights more accessible for technical and non-technical users alike. 
Technology
180 Seguros is powering its data management platform for employees with Google Cloud AI and BigQuery to improve operational metric tracking, allowing for 3X faster query times.
Addy AI is helping mortgage lenders and banks automate their lending processes with custom AI models trained on Vertex AI. For example, the platform can extract loan opportunity details from lengthy email threads with numerous attachments.
AI21 Labs has partnered with Google Cloud to bring the power of the Jamba 1.5 Model Family to Vertex AI. This integration offers enterprises models designed to excel in high-demand tasks like summarization, reasoning, and creative content generation.
Anthropic has partnered with Google Cloud to offer its Claude models — including the upgraded Claude 3.5 Sonnet and Claude 3.5 Haiku — on Vertex AI Model Garden. This provides organizations with more model options for intelligence, speed, and cost-efficiency.
Birdie.ai specializes in customer feedback analytics that provides actionable insights to companies. Using Gemini 1.5 Flash and Vertex AI, Birdie achieved a 9% improvement in model accuracy to attain a 96% accuracy rate while reducing the processed unit costs by 15%.
Bosch SDS, which supplies technology and services globally, has integrated sustainability into its core operations. Using Google Cloud Kubernetes, BigQuery, and Firebase to manage and scale solutions, build an AI-based cognition engine, and provide real-time alerts, Bosch SDS reduced energy costs by 12%, improved indoor comfort, and better usage of renewable energy.
Climate Engine and Robeco are using AI and geospatial technologies with their scientific expertise and investment knowledge to inform how publicly traded companies’ actions impact biodiversity. 
Collato s Vertex AI-powered assistant allows users to instantly transform raw information, including audio recordings, text, and images, into structured, polished documents, enabling users to create documents, such as requirements documents and user research summaries, in a matter of seconds.
Contextual is working with Google Cloud to offer enterprises fully customizable, trustworthy, privacy-aware AI grounded in internal knowledge bases.
Essential AI, a developer of enterprise AI solutions, is using Google Cloud’s AI-optimized TPU v5p accelerator chips to train its own AI models.
fileAI leverages proprietary AI to automate the processing of any file end-to-end directly into any system without manual intervention. Built for finance, logistics, and insurance teams, fileAI s AI workflows unlock unstructured data in 90% less time, saving users up to 80% in costs.
Hugging Face is collaborating with Google across open science, open source, cloud, and hardware to enable companies to build their own AI with the latest open models from Hugging Face and Google Cloud hardware and software. 
Intelligencia AI is using AI models to research novel new drugs, relying on Google Cloud’s AI-optimized infrastructure to deliver scalable research that is accurate and transparent to meet the stringent needs of medicine.</p>
     
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
