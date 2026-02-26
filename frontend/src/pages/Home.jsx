import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import { useEffect, useState } from "react";
import "../style/showcase.css";

function Home() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => prev - 72);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <HeroSection />

            {/* ===== CINEMATIC 3D SHOWCASE ===== */}
            <section className="py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-4xl font-bold text-[#0f172a] mb-16 tracking-wide">
                        Popular Courses
                    </h2>

                    <div className="cinema-wrapper">
                        <div
                            className="cinema-carousel"
                            style={{ transform: `rotateY(${rotation}deg)` }}
                        >
                            {courses.slice(0, 5).map((course, index) => {
                                const angle = index * 72;

                                return (
                                    <div
                                        key={course.id}
                                        className="cinema-card"
                                        style={{
                                            transform: `rotateY(${angle}deg) translateZ(260px)`,
                                        }}
                                    >
                                        <h3 className="text-lg font-semibold text-[#0f172a] mb-2">
                                            {course.title}
                                        </h3>

                                        <p className="text-gray-500 text-xs mb-2">
                                            Duration: {course.duration}
                                        </p>

                                       
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;