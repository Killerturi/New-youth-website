function Contact() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold text-center mb-12 text-primary">
                Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
                <form className="bg-white p-8 rounded-xl shadow-xl space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border p-3 rounded-lg"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border p-3 rounded-lg"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full border p-3 rounded-lg"
                        rows="4"
                    ></textarea>
                    <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition">
                        Send Message
                    </button>
                </form>

                <div className="bg-gray-100 p-8 rounded-xl shadow">
                    <h3 className="text-xl font-bold mb-4">Our Address</h3>
                    <p>
                        Near New Sannyasi Kali Mandir,
                        Ananda More, MG Rd,
                        Ukhra, West Bengal 713363
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Contact;