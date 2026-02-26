import HeroSection from "../components/HeroSection";
import courses from "../data/coursesData";
import { useNavigate } from "react-router-dom";
import { Laptop, Calculator, Code } from "lucide-react";

function Home() {
    const navigate = useNavigate();
    const icons = [Laptop, Calculator, Code];

    return (
        <div>
            <HeroSection />

            {/* ===== MASTER PREMIUM CLASSY COURSES ===== */}
            <section className="py-32 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADER */}
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-[#0f172a] tracking-wide">
                            Popular Courses
                        </h2>

                        <div className="w-20 h-[3px] bg-[#c9a227] mx-auto mt-6 rounded-full"></div>

                        <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-lg">
                            Build practical skills with industry-focused programs designed
                            to shape your professional future.
                        </p>
                    </div>

                    {/* COURSE GRID */}
                    <div className="grid md:grid-cols-3 gap-12">
                        {courses.slice(0, 3).map((course, index) => {
                            const Icon = icons[index];

                            return (
                                <div
                                    key={course.id}
                                    className="group bg-white rounded-2xl p-10 shadow-md hover:shadow-2xl transition duration-500 border border-gray-200 hover:border-[#c9a227]"
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#f1f5f9] text-[#0f172a] mb-8 group-hover:bg-[#c9a227]/10 group-hover:text-[#c9a227] transition duration-500">
                                        <Icon size={30} />
                                    </div>

                                    <h3 className="text-2xl font-semibold text-[#0f172a] mb-4">
                                        {course.title}
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-4">
                                        <span className="font-medium text-gray-700">
                                            Duration:
                                        </span>{" "}
                                        {course.duration}
                                    </p>

                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        {course.description}
                                    </p>

                                    <button
                                        onClick={() => navigate("/courses")}
                                        className="px-6 py-2 border border-[#0f172a] text-[#0f172a] rounded-full font-medium hover:bg-[#0f172a] hover:text-white transition duration-300"
                                    >
                                        Learn More
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    {/* VIEW ALL BUTTON */}
                    <div className="text-center mt-20">
                        <button
                            onClick={() => navigate("/courses")}
                            className="px-12 py-4 bg-[#0f172a] text-white rounded-full font-semibold shadow-lg hover:bg-[#c9a227] hover:text-[#0f172a] transition duration-300"
                        >
                            View All Courses
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default Home;