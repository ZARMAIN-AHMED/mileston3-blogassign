'use client'
import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div >


      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-blue-500 h-screen" >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 container mx-auto px-6 flex items-center justify-center h-full">
          <div className="text-center text-white max-w-2xl mx-auto">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Dive into the World of Stories and Ideas
            </h1>
            <p className="text-xl mb-8">
              Explore the latest articles, technology. Start your journey with us today!
            </p>
            <Link href="/components/blog" className="bg-yellow-500 text-black py-3 px-8 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-yellow-400">
              Discover Latest Posts
            </Link>
          </div>
        </div>
      </section>

     

      {/* Latest Posts Section */}
      <section id="latest-posts" className="py-20 px-6 text-center bg-blue-50  ">
        <h2 className="text-3xl font-semibold mb-6">Latest Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-3">The Future of Technology</h3>
            <p className="text-gray-700">The latest AI news we announced in December. </p>
            <Link href="/components/blog1" className="text-blue-600 hover:underline">Read More</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-3">321 real-world gen AI use cases</h3>
            <p className="text-gray-700"> 321 real-world gen AI use cases from the world's leading organizations..</p>
            <Link href="/components/blog2" className="text-blue-600 hover:underline">Read More</Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-semibold text-xl mb-3">Introducing Gemini 2.0</h3>
            <p className="text-gray-700">Introducing Gemini 2.0: our new AI model for the agentic era.</p>
            <Link href="/components/blog3" className="text-blue-600 hover:underline">Read More</Link>
          </div>
        </div>
      </section>


      
    </div>
  )
}

export default Home