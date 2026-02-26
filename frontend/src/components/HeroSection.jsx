import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import herobg from "../assets/images/herobg.jpg";
import circle1 from "../assets/images/circle1.jpg";
import circle2 from "../assets/images/circle2.webp";
import circle3 from "../assets/images/circle3.webp";
import "../style/heroSection.css";

function HeroSection() {
    const navigate = useNavigate();
    const images = [circle2, circle3, circle1];
    const [currentImage, setCurrentImage] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [show, setShow] = useState(false);

    const fullText =
        "Career Development Courses | Anytime Admission";

    // Typing effect
    useEffect(() => {
        let index = 0;
        const typing = setInterval(() => {
            setTypedText(fullText.slice(0, index));
            index++;
            if (index > fullText.length) clearInterval(typing);
        }, 40);
        return () => clearInterval(typing);
    }, []);

    // Image slider
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    // Animation delay
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section
            className="relative min-h-[95vh] flex items-center overflow-hidden"
            style={{
                backgroundImage: `url(${herobg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div
                    className={`transition-all duration-1000 ${show
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    {/* RGB Moving Text */}
                    <h1 className="rgb-text hero-heading text-4xl md:text-6xl leading-tight mb-6">
                        New Ukhra Youth <br /> Computer Training Centre
                    </h1>

                    <p className="text-lg md:text-xl mb-8 text-orange-400 font-medium h-8">
                        {typedText}
                    </p>

                    <button
                        onClick={() => navigate("/courses")}
                        className="bg-orange-500 hover:bg-orange-600 px-10 py-3 rounded-full text-white font-semibold transition duration-300 shadow-xl"
                    >
                        Explore Courses
                    </button>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;