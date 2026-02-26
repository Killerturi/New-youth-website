function Gallery() {
    const images = [
        "https://source.unsplash.com/400x300/?computer,classroom",
        "https://source.unsplash.com/400x300/?students,computer",
        "https://source.unsplash.com/400x300/?training,lab",
        "https://source.unsplash.com/400x300/?education,computer"
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">
                Our Gallery
            </h1>

            <div className="grid md:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="gallery"
                        className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;