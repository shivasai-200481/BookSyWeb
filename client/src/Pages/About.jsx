import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
  <>
    <Navbar/>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center mb-6  text-red-700">About Booksy</h1>
      
      <p className="text-lg   text-gray-700 md:text-center mb-10 text-justify leading-relaxed">
        Welcome to <span className="font-semibold text-violet-800">Booksy</span> — your free gateway to the world of books and ideas. 
        We’re on a mission to make reading more accessible, enjoyable, and inclusive for everyone.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">📚 What is Booksy?</h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Booksy is an online platform where readers can explore and enjoy books across various genres — all for free. 
            From academic guides and exam prep to creative fiction and self-help, we’ve got something for everyone.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-600 mb-2">🚀 Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-justify">
            Our goal is simple: to democratize access to knowledge. 
            We believe that education and stories should be available to all, regardless of background or budget.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-brown-600 mb-2">🧑‍💻 The Creator</h2>
          <p className="text-gray-700 leading-relaxed text-justify ">
            Hello! I’m <span className="font-medium">Shiva</span>, an aspiring full-stack developer and the creator of Booksy. 
            This project began as a way to combine my passion for coding and books, and to give back to learners like me.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-yellow-600 mb-2">📬 Get in Touch</h2>
          <p className="text-gray-700 text-justify leading-relaxed">
            Have feedback, ideas, or just want to say hi? Reach out through our contact page or follow us on social media.
          </p>
        </section>
      </div>

      
    </div>

  </>
  )
}

export default About
