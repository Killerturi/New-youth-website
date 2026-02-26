import { useState } from "react";
import galleryImages from "../data/galleryImages";
import { X } from "lucide-react";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="bg-[#0b1120] py-28 min-h-screen">

            {/* ===== HEADER ===== */}
            <div className="max-w-7xl mx-auto px-6 text-center mb-20">
                <h1 className="text-5xl font-bold text-white tracking-wide">
                    Our Gallery
                </h1>
                <div className="w-24 h-[3px] bg-orange-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* ===== MASONRY STYLE GRID ===== */}
            <div className="max-w-7xl mx-auto px-6 columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

                {galleryImages.map((image) => (
                    <div
                        key={image.id}
                        className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid"
                        onClick={() => setSelectedImage(image.src)}
                    >
                        <img
                            src={image.src}
                            alt="Gallery"
                            className="w-full rounded-2xl transform group-hover:scale-110 transition duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
                    </div>
                ))}

            </div>


            {/* ===== LIGHTBOX MODAL ===== */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">

                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-8 right-8 text-white hover:text-orange-500 transition"
                    >
                        <X size={36} />
                    </button>

                    <img
                        src={selectedImage}
                        alt="Full View"
                        className="max-w-[90%] max-h-[85vh] rounded-2xl shadow-2xl animate-fadeIn"
                    />

                </div>
            )}
        </div>
    );
}

export default Gallery;