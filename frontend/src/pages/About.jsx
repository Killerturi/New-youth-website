function About() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-primary mb-6">About Us</h1>

            <p className="text-gray-700 leading-7 mb-6">
                New Ukhra Youth Computer Training Centre is dedicated to empowering
                students with quality computer education and practical training.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                <div className="bg-gray-100 p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p>To become the leading digital training center in Ukhra.</p>
                </div>

                <div className="bg-gray-100 p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                    <p>To provide affordable and skill-based education for youth.</p>
                </div>
            </div>
        </div>
    );
}

export default About;