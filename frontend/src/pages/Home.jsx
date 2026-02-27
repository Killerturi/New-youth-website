import { useRef, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import "../style/showcase.css";
import GoogleReviewsWidget from "google-reviews-widget";
import galleryImages from "../data/galleryImages";
import { useNavigate } from "react-router-dom";

function Home() {
  const galleryRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
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
          ${
            visible
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
    </div>
  );
}

export default Home;
