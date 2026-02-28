import { useEffect, useState, useRef } from "react";
import ScrollReveal from "../components/ScrollReveal";

function About() {

  /* ================= Animated Counter ================= */

  function AnimatedNumber({ value, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.6 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!visible) return;

      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [visible, value]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  }

  return (
    <div className="bg-[#f8fafc] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] text-white py-32 px-6 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500 opacity-20 blur-3xl rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
              About NUYCTC
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-8">
              Established in <span className="text-yellow-400 font-semibold">April 2009</span>,
              we proudly carry <span className="text-yellow-400 font-semibold">16+ years of excellence </span>
              in digital education and skill development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <ScrollReveal>
            <div>
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
                Shaping Digital Futures
              </h2>
              <p className="text-gray-700 leading-8 text-lg">
                New Ukhra Youth Computer Training Centre has successfully trained
                <span className="text-blue-700 font-semibold"> 4,400+ students</span>.
                We combine structured curriculum, practical training, and industry relevance
                to empower students with real-world digital skills.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-blue-500/20 transition duration-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                Why We Stand Out
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>✔ Industry-aligned curriculum</li>
                <li>✔ 100% practical learning</li>
                <li>✔ Experienced faculty</li>
                <li>✔ Career-focused approach</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#0f172a] py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 text-center">

            {[
              { value: 2009, label: "Established" },
              { value: 16, label: "Years of Excellence", suffix: "+" },
              { value: 4400, label: "Students Trained", suffix: "+" },
              { value: 100, label: "Practical Focus", suffix: "%" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 200}>
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-14 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
                  <h2 className="text-5xl font-bold text-yellow-400 mb-4">
                    <AnimatedNumber value={item.value} suffix={item.suffix || ""} />
                  </h2>
                  <p className="text-gray-200 text-lg">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-center text-[#0f172a] mb-16">
            Leadership
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {[
            { name: "Apurba Krishna Chattaraj", role: "Head of Institution" },
            { name: "Sandip Mondal", role: "Head of Institution" },
          ].map((leader, i) => (
            <ScrollReveal key={i} delay={i * 200}>
              <div className="bg-white p-14 rounded-3xl shadow-xl border border-gray-100 text-center hover:shadow-2xl transition duration-500">
                <h3 className="text-2xl font-semibold text-blue-800">
                  {leader.name}
                </h3>
                <p className="text-gray-600 mt-3">{leader.role}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ================= VISION MISSION ================= */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <ScrollReveal>
            <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-200 leading-7">
                To become a center of excellence in digital education
                by fostering innovation, professionalism, and continuous growth.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white/10 backdrop-blur-lg p-12 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="space-y-3 text-gray-200">
                <li>• Deliver industry-aligned programs</li>
                <li>• Bridge academic & industry gaps</li>
                <li>• Develop technical confidence</li>
                <li>• Prepare students for long-term success</li>
              </ul>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="py-32 bg-[#0f172a] text-white text-center">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-300 leading-8">
              With over 16 years of legacy and 4,400+ trained students,
              we are dedicated to transforming learners into confident,
              future-ready professionals.
            </p>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
}

export default About;