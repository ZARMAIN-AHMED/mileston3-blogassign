// src/components/About.tsx

const About = () => {
    return (
      <div className="bg-blue-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">About Our Blog</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Welcome to our blog! Our mission is to share insightful articles, tips, and stories on topics
              that matter to you. Whether you are here to explore new ideas, learn something new, or stay updated
              on current trends, we hope you will find something that sparks your interest.
            </p>
            <p>
              Our team of writers is passionate about delivering high-quality content that is informative,
              engaging, and thought-provoking. We believe in making complex topics easy to understand and
              providing actionable advice you can apply to your daily life.
            </p>
            <p>
              We cover a wide range of subjects, from technology to lifestyle, personal development, and more.
              Our goal is to create a community where readers can connect, share ideas, and grow together.
            </p>
            <p>
              If you have any questions or would like to contribute to our blog, feel free to reach out to us
              through our Contact page. We value your feedback and look forward to hearing from you!
            </p>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-gray-800">Thank you for visiting!</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  