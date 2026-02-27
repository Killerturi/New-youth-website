import { useState } from "react";
import courses from "../data/coursesData";
import courseHeaderBg from "../assets/images/coursebg.jpg";
import { Laptop, Calculator, Code, PenTool, X } from "lucide-react";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const icons = [Laptop, Calculator, Code, PenTool];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${courseHeaderBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-blue-800/80"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-wide">
            Explore Our Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Build Skills. Gain Confidence. Shape Your Future.
          </p>
        </div>
      </section>

      {/* ================= COURSE GRID ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {courses.map((course, index) => {
              const Icon = icons[index % icons.length];

              return (
                <div
                  key={course.id}
                  className="relative group rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 hover:scale-105 transition duration-500"
                >
                  <div className="bg-white rounded-2xl p-8 h-full shadow-lg">

                    {/* Icon */}
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white mb-6 shadow-md">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-800 mb-3 leading-snug">
                      {course.title}
                    </h3>

                    {/* Badge */}
                    <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-3 py-1 rounded-full mb-4">
                      {course.category}
                    </span>

                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Duration:</strong> {course.duration}
                    </p>

                    <p className="text-sm font-semibold text-indigo-600 mb-6">
                      Fees: ₹{course.fees}
                    </p>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="mt-auto text-indigo-600 font-medium hover:text-indigo-800 transition"
                    >
                      View Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white/95 backdrop-blur-xl w-full max-w-3xl rounded-3xl shadow-2xl p-10 relative max-h-[90vh] overflow-y-auto border border-white/40">

            {/* Close */}
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-6 right-6 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <h2 className="text-3xl font-bold text-indigo-700 mb-4">
              {selectedCourse.title}
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <p><strong>Code:</strong> {selectedCourse.code}</p>
              <p><strong>Category:</strong> {selectedCourse.category}</p>
              <p><strong>Duration:</strong> {selectedCourse.duration}</p>
              <p className="text-indigo-600 font-semibold">
                <strong>Fees:</strong> ₹{selectedCourse.fees}
              </p>
            </div>

            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              Course Syllabus
            </h3>

            {/* Array syllabus */}
            {Array.isArray(selectedCourse.syllabus) ? (
              <ul className="space-y-2">
                {selectedCourse.syllabus.map((item, i) => (
                  <li
                    key={i}
                    className="bg-indigo-50 p-3 rounded-lg text-gray-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              Object.entries(selectedCourse.syllabus).map(
                ([semester, subjects], index) => (
                  <div key={index} className="mb-6">
                    <h4 className="font-semibold text-indigo-600 mb-3 capitalize">
                      {semester}
                    </h4>
                    <ul className="space-y-2">
                      {subjects.map((subject, i) => (
                        <li
                          key={i}
                          className="bg-indigo-50 p-3 rounded-lg text-gray-700"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )
            )}

            <div className="mt-8 border-t pt-6 text-sm text-gray-600 space-y-2">
              <p>✔ Practical Lab Sessions</p>
              <p>✔ Real-world Assignments</p>
              <p>✔ Industry-Recognized Certificate</p>
              <p>✔ Career Guidance & Interview Prep</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;