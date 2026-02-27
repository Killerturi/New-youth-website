import { useRef, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import "../style/showcase.css";
import GoogleReviewsWidget from "google-reviews-widget";
import galleryImages from "../data/galleryImages";
import { useNavigate } from "react-router-dom";
import CourseModal from "../components/CourseModal";

function Home() {
    const galleryRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev - 72);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <div>
            <HeroSection />

            <section className="py-28 bg-gradient-to-b from-white to-[#f1f5f9]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Heading */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] tracking-tight">
                            Popular Courses
                        </h2>
                        <p className="text-gray-500 mt-4 text-lg">
                            Industry-oriented programs designed for real career growth
                        </p>
                        <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {courses.slice(0, 6).map((course) => (
                            <div
                                key={course.id}
                                className="group relative bg-white rounded-3xl p-8 
                     shadow-lg hover:shadow-2xl 
                     transition-all duration-500 
                     hover:-translate-y-3"
                            >
                                {/* Top Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                                <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                                    {course.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-6">
                                    Duration: {course.duration}
                                </p>
                                <button
                                    onClick={() => setSelectedCourse(course)}
                                    className="text-blue-700 font-medium hover:underline"
                                >
                                    View Details →
                                </button>

                            </div>
                        ))}

                    </div>
                    <div className="flex justify-center mt-16">
                        <button
                            onClick={() => navigate("/courses")}
                            className="relative text-blue-700 text-lg font-semibold group"
                        >
                            Explore Complete Course Catalog

                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                                →
                            </span>

                            {/* Animated Line */}
                            <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== CINEMATIC POP + FLOAT GALLERY ===== */}
            <section ref={galleryRef} className="py-28 bg-[#f8fafc] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-[#0f172a] tracking-wide">
                            Our Gallery
                        </h2>
                        <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {galleryImages.slice(0, 8).map((image, index) => (
                            <div
                                key={image.id}
                                className={`group relative overflow-hidden rounded-3xl shadow-xl
          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible
                                        ? "opacity-100 translate-y-0 scale-100"
                                        : "opacity-0 translate-y-16 scale-90"
                                    }`}
                                style={{
                                    transitionDelay: `${index * 120}ms`,
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt="Gallery"
                                    className="w-full h-64 object-cover 
            group-hover:scale-110 
            transition duration-700"
                                />

                                {/* Dark overlay hover */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                {/* Floating animation */}
                                <div className="absolute inset-0 animate-float pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-14">
                        <button
                            onClick={() => navigate("/gallery")}
                            className="px-12 py-4 bg-[#0f172a] text-white rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300"
                        >
                            View Full Gallery
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-white tracking-wide">
                            What Our Students Say
                        </h2>
                        <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="review-wrapper">
                        <GoogleReviewsWidget instanceId="E5ZORIhOx1WjO1cU08uI" />
                    </div>
                </div>
            </section>
            <CourseModal
                selectedCourse={selectedCourse}
                onClose={() => setSelectedCourse(null)}
            />
        </div>
    );
}

export default Home;
