import { useRef, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import GoogleReviewsWidget from "google-reviews-widget";
import galleryImages from "../data/galleryImages";
import { useNavigate } from "react-router-dom";
import CourseModal from "../components/CourseModal";
import ScrollReveal from "../components/ScrollReveal";

function Home() {
    const galleryRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const navigate = useNavigate();

    /* ================= Animated Counter ================= */

    function AnimatedNumber({ value, suffix = "" }) {
        const [count, setCount] = useState(0);
        const ref = useRef(null);
        const [show, setShow] = useState(false);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setShow(true);
                },
                { threshold: 0.6 }
            );

            if (ref.current) observer.observe(ref.current);
            return () => observer.disconnect();
        }, []);

        useEffect(() => {
            if (!show) return;

            let start = 0;
            const duration = 2000;
            const increment = value / (duration / 16);

            const counter = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(counter);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);

            return () => clearInterval(counter);
        }, [show, value]);

        return (
            <span ref={ref}>
                {count}
                {suffix}
            </span>
        );
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.2 }
        );

        if (galleryRef.current) observer.observe(galleryRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <HeroSection />

            {/* ================= STATS SECTION (NEW) ================= */}
            <section className="bg-[#0f172a] py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white">
                                Our Achievements
                            </h2>
                            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 gap-10 text-center">
                        {[
                            { value: 2009, label: "Established" },
                            { value: 16, label: "Years of Excellence", suffix: "+" },
                            { value: 4400, label: "Students Trained", suffix: "+" },
                            { value: 100, label: "Practical Focus", suffix: "%" },
                        ].map((item, i) => (
                            <ScrollReveal key={i} delay={i * 200}>
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 
                                    p-14 rounded-3xl shadow-2xl 
                                    hover:scale-105 transition duration-500 
                                    flex flex-col justify-center h-full">

                                    <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                                        <AnimatedNumber
                                            value={item.value}
                                            suffix={item.suffix || ""}
                                        />
                                    </h2>

                                    <p className="text-gray-200 text-lg min-h-[56px] flex items-center justify-center">
                                        {item.label}
                                    </p>

                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= COURSES ================= */}
            <section className="py-22 bg-gradient-to-b from-white to-[#f1f5f9]">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-20">
                            <h2 className="text-5xl font-bold text-[#0f172a] tracking-tight">
                                Popular Courses
                            </h2>
                            <p className="text-gray-500 mt-4 text-lg">
                                Industry-oriented programs designed for real career growth
                            </p>
                            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-3 gap-10">
                        {courses.slice(0, 6).map((course, i) => (
                            <ScrollReveal key={course.id} delay={i * 150}>
                                <div className="group relative bg-white rounded-3xl p-8 
    shadow-lg hover:shadow-2xl 
    transition-all duration-500 
    hover:-translate-y-3 
    flex flex-col h-full">

                                    {/* Top Accent Line */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-3xl"></div>

                                    <h3 className="text-xl font-semibold text-[#0f172a] mb-3 min-h-[56px]">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm mb-6">
                                        Duration: {course.duration}
                                    </p>

                                    {/* Push button to bottom */}
                                    <div className="mt-auto">
                                        <button
                                            onClick={() => setSelectedCourse(course)}
                                            className="text-blue-700 font-medium hover:underline"
                                        >
                                            View Details →
                                        </button>
                                    </div>

                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex justify-center py-2 bg-[#f1f5f9]">
                <div className="w-60 h-[3px] bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            </div>

            {/* ================= GALLERY ================= */}
            <section
                ref={galleryRef}
                className="py-15 bg-[#f8fafc] overflow-hidden"
            >
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-[#0f172a]">
                                Our Gallery
                            </h2>
                            <p className="text-gray-500 mt-4 text-lg tracking-wide">
                                Moments that define our journey.
                            </p>
                            <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <div className="grid md:grid-cols-4 gap-8">
                        {galleryImages.slice(0, 8).map((image, index) => (
                            <ScrollReveal key={image.id} delay={index * 120}>
                                <div className="group relative overflow-hidden rounded-3xl shadow-xl">
                                    <img
                                        src={image.src}
                                        alt="Gallery"
                                        className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= REVIEWS ================= */}
            <section className="py-32 bg-[#0f172a]">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <div className="text-center mb-14">
                            <h2 className="text-4xl font-bold text-white">
                                What Our Students Say
                            </h2>
                            <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <GoogleReviewsWidget instanceId="E5ZORIhOx1WjO1cU08uI" />
                    </ScrollReveal>
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