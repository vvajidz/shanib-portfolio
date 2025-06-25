import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-4 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          About Me
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          I'm a passionate graphic designer with 3+ years of experience in branding, advertising,
          and creative direction. I bring ideas to life across digital and print platforms —
          with a strong eye for clean, effective design.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Work Experience */}
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-6">
              <Briefcase size={24} /> Work Experience
            </h3>
            <ul className="space-y-6 text-white/80">
              <li>
                <p className="font-semibold">Creative Head</p>
                <p>Novio Creative Branding Agency</p>
                <p className="text-sm text-white/50">2024 – Present</p>
              </li>
              <li>
                <p className="font-semibold">Senior Graphic Designer</p>
                <p>Yomego Advertising Agency</p>
                <p className="text-sm text-white/50">2023 – 2024</p>
              </li>
              <li>
                <p className="font-semibold">Freelance Graphic Designer</p>
                <p>Self-employed</p>
                <p className="text-sm text-white/50">2022 – 2023</p>
              </li>
              <li>
                <p className="font-semibold">Graphic Designer</p>
                <p>Sign Maker</p>
                <p className="text-sm text-white/50">6 Months in 2022</p>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-2xl font-semibold text-blue-400 flex items-center gap-2 mb-6">
              <GraduationCap size={24} /> Education
            </h3>
            <ul className="space-y-6 text-white/80">
              <li>
                <p className="font-semibold">Diploma in Graphic Design</p>
                <p>Delight Institute</p>
                <p className="text-sm text-white/50">2022</p>
              </li>
              <li>
                <p className="font-semibold">HSS - Board of Higher Secondary Education</p>
                <p className="text-sm text-white/50">March 2020 – 2021</p>
              </li>
              <li>
                <p className="font-semibold">SSLC</p>
                <p className="text-sm text-white/50">2018 – 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
