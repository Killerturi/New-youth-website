import { NavLink } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../style/navbar.css";

function Navbar() {

    const texts = [
        "নিউ উখরা যুব কম্পিউটার প্রশিক্ষণ কেন্দ্র",
        "New Ukhra Youth Computer Training Centre"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ===== TOP BAR ===== */}
            <div className="bg-sky-600 text-white text-sm">
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>
                            Near New Sannyasi Kali Mandir, Ananda More, MG Rd, Ukhra, WB 713363
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>9749616555 / 9732081768</span>
                    </div>
                </div>
            </div>

            {/* ===== MAIN NAVBAR ===== */}
            <nav className="relative bg-white shadow-md z-20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* LOGO + TITLE LOOP */}
                    <NavLink to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="Institute Logo"
                            className="h-12 w-auto object-contain"
                        />

                        <div className="overflow-hidden leading-tight">

                            {index === 0 ? (
                                <>
                                    <h1 className="text-blue-900 font-bold text-lg">
                                        নিউ উখরা যুব
                                    </h1>
                                    <p className="text-blue-800 text-sm font-medium">
                                        কম্পিউটার প্রশিক্ষণ কেন্দ্র
                                    </p>
                                </>
                            ) : (
                                <>
                                    <h1 className="text-blue-900 font-bold text-lg">
                                        New Ukhra Youth
                                    </h1>
                                    <p className="text-blue-800 text-sm font-medium">
                                        Computer Training Centre
                                    </p>
                                </>
                            )}

                        </div>
                    </NavLink>

                    {/* MENU */}
                    <div className="hidden md:flex space-x-8 font-medium text-gray-700">
                        <NavLink to="/" className="hover:text-blue-900 transition">
                            Home
                        </NavLink>
                        <NavLink to="/about" className="hover:text-blue-900 transition">
                            About
                        </NavLink>
                        <NavLink to="/courses" className="hover:text-blue-900 transition">
                            Courses
                        </NavLink>
                        <NavLink to="/gallery" className="hover:text-blue-900 transition">
                            Gallery
                        </NavLink>
                        <NavLink to="/contact" className="hover:text-blue-900 transition">
                            Contact
                        </NavLink>
                    </div>
                </div>

                <div className="scallop"></div>
            </nav>
        </>
    );
}

export default Navbar;