import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import { useEffect, useState } from "react";
import "../style/showcase.css";
import GoogleReviewsWidget from 'google-reviews-widget';
import galleryImages from "../data/galleryImages";
import { useNavigate } from "react-router-dom";

function Home() {
    const [rotation, setRotation] = useState(0);
    const navigate = useNavigate();

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

            {/* ===== GALLERY PREVIEW SECTION ===== */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold text-[#0f172a] tracking-wide">
                            Our Gallery
                        </h2>
                        <div className="w-20 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {galleryImages.slice(0, 8).map((image) => (
                            <div
                                key={image.id}
                                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-500"
                            >
                                <img
                                    src={image.src}
                                    alt="Gallery"
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => navigate("/gallery")}
                            className="px-10 py-3 bg-[#0f172a] text-white rounded-full font-semibold hover:bg-orange-500 transition duration-300"
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
                        <GoogleReviewsWidget instanceId="UEAksJrheqqZjpvwawq7" />
                    </div>

                </div>
            </section>


        </div>
    );
}

export default Home;