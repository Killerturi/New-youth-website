import { useState } from "react";
import courses from "../data/coursesData";
import courseHeaderBg from "../assets/images/coursebg.jpg";
import { Laptop, Calculator, Code, PenTool, X } from "lucide-react";

function Courses() {
    const [selectedCourse, setSelectedCourse] = useState(null);
    const icons = [Laptop, Calculator, Code, PenTool];

    return (
        <div>

            {/* ===== HERO BANNER ===== */}
            <section
                className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${courseHeaderBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 to-[#0f172a]/70"></div>

                <div className="relative z-10 px-6 max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Our Courses
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200">
                        Explore our professionally designed programs tailored to help you
                        build real-world skills and confidence.
                    </p>
                </div>
            </section>

            {/* ===== COURSE GRID SECTION ===== */}
            <section className="bg-[#f9fafb] py-28">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid md:grid-cols-3 gap-14">
                        {courses.map((course, index) => {
                            const Icon = icons[index % icons.length];

                            return (
                                <div
                                    key={course.id}
                                    className="group relative bg-white rounded-2xl p-10 
            shadow-sm transition-all duration-500 
            hover:shadow-2xl hover:-translate-y-2"
                                >

                                    {/* ===== BORDER TRACE SVG ===== */}
                                    <svg
                                        className="absolute inset-0 w-full h-full pointer-events-none"
                                    >
                                        <rect
                                            x="1"
                                            y="1"
                                            width="calc(100% - 2px)"
                                            height="calc(100% - 2px)"
                                            rx="16"
                                            ry="16"
                                            fill="none"
                                            stroke="#0f172a"
                                            strokeWidth="2"
                                            className="trace-border"
                                        />
                                    </svg>

                                    {/* Icon */}
                                    <div className="w-14 h-14 flex items-center justify-center 
            rounded-full bg-gray-100 text-[#0f172a] mb-8">
                                        <Icon size={26} />
                                    </div>

                                    <h3 className="text-2xl font-medium text-[#0f172a] mb-3">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-4">
                                        <span className="font-medium text-gray-700">
                                            Duration:
                                        </span>{" "}
                                        {course.duration}
                                    </p>

                                    <p className="text-gray-600 mb-6">
                                        {course.description}
                                    </p>

                                    <button
                                        onClick={() => setSelectedCourse(course)}
                                        className="text-[#0f172a] font-medium underline 
              underline-offset-4 hover:text-gray-600 transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </section>

            {/* ===== MODAL POPUP ===== */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm 
        flex items-center justify-center z-50 px-4">

                    <div className="bg-white w-full max-w-2xl 
          rounded-2xl shadow-2xl p-10 
          relative max-h-[90vh] overflow-y-auto">

                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-5 right-5 text-gray-500 hover:text-black"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-3xl font-semibold text-[#0f172a] mb-4">
                            {selectedCourse.title}
                        </h2>

                        <p className="text-gray-500 mb-4">
                            <strong>Duration:</strong> {selectedCourse.duration}
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            {selectedCourse.description}
                        </p>

                        <div className="border-t pt-6 space-y-3 text-gray-600 text-sm">
                            <p>• Practical Lab Sessions</p>
                            <p>• Real-world Assignments</p>
                            <p>• Certificate After Completion</p>
                            <p>• Small Batch Personalized Guidance</p>
                            <p>• Career & Interview Preparation</p>
                        </div>

                    </div>
                </div>
            )}

        </div>
    );
}

export default Courses;