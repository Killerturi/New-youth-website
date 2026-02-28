function About() {
  return (
    <div className="bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About New Ukhra Youth Computer Training Centre
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-200">
            Established in <span className="text-yellow-400 font-semibold">April 2009</span>, 
            NUYCTC has grown into a professionally managed institute with 
            <span className="text-yellow-400 font-semibold"> 16+ years of excellence </span> 
             in digital education and skill development.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <p className="text-gray-700 leading-8 text-lg mb-8">
          New Ukhra Youth Computer Training Centre (NUYCTC) has successfully trained 
          <span className="font-semibold text-blue-700"> 4,400+ students</span> since its inception. 
          Located in Ukhra, West Bengal, the institute stands as a trusted name in 
          computer education, known for its structured curriculum, practical training 
          methodology, and commitment to academic excellence.
        </p>

        {/* ================= STATS SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-16">
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-700">2009</h2>
            <p className="mt-2 text-gray-600 font-medium">Established</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-700">16+</h2>
            <p className="mt-2 text-gray-600 font-medium"> Years of Excellence</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-700">4400+</h2>
            <p className="mt-2 text-gray-600 font-medium">Students Trained</p>
          </div>
          <div className="bg-blue-50 p-8 rounded-xl shadow-md">
            <h2 className="text-4xl font-bold text-blue-700">100%</h2>
            <p className="mt-2 text-gray-600 font-medium">Practical Learning Focus</p>
          </div>
        </div>

        {/* ================= LEADERSHIP SECTION ================= */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Leadership
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-800">
                Apurba Krishna Chattaraj
              </h3>
              <p className="text-gray-600 mt-2">
                Head of the Institution
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-800">
                Sandip Mondal
              </h3>
              <p className="text-gray-600 mt-2">
                Head of the Institution
              </p>
            </div>
          </div>
        </div>

        {/* ================= LEGACY SECTION ================= */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Legacy of Excellence
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            Since April 2009, NUYCTC has consistently evolved alongside technological 
            advancements. Over the past 16+ years, the institute has built a strong 
            foundation based on innovation, professionalism, and student-centered learning.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
            <li>Industry-aligned curriculum</li>
            <li>Professional training standards</li>
            <li>Hands-on project-based learning</li>
            <li>Student-focused academic approach</li>
          </ul>
        </div>

        {/* ================= VISION & MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-7">
              To become a center of excellence in computer and digital education 
              by fostering innovation, professionalism, and continuous skill enhancement.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Mission
            </h3>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>Deliver career-oriented and industry-aligned programs</li>
              <li>Bridge the gap between academics and industry requirements</li>
              <li>Develop technical competence and confidence</li>
              <li>Prepare students for long-term career success</li>
            </ul>
          </div>
        </div>

        {/* ================= ACADEMIC FRAMEWORK ================= */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Our Academic Framework
          </h2>
          <p className="text-gray-700 leading-8 mb-6">
            NUYCTC offers a comprehensive portfolio of diploma and advanced certification 
            programs aligned with modern industry standards and emerging technologies.
          </p>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
            <li>Diploma & Advanced Certification Courses</li>
            <li>AI-Integrated Web & Software Development Programs</li>
            <li>Communication & Personality Development Training</li>
            <li>Live Projects & Industry-Oriented Assignments</li>
            <li>Portfolio Development & Deployment Support</li>
          </ul>
        </div>

        {/* ================= COMMITMENT SECTION ================= */}
        <div className="bg-blue-900 text-white p-10 rounded-xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto leading-8 text-gray-200">
            With 16+ years of legacy, 4,400+ trained students, and visionary leadership, 
            NUYCTC remains committed to maintaining the highest standards of academic 
            excellence, innovation, and professional integrity. Our mission is not 
            only to educate but to transform students into confident, future-ready professionals.
          </p>
        </div>

      </section>
    </div>
  );
}

export default About;