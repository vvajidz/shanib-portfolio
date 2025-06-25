import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  {
    name: "Adobe Photoshop",
    icon: "https://img.icons8.com/?size=100&id=2916&format=png&color=339AF0",
  },
  {
    name: "Adobe Illustrator",
    icon: "https://img.icons8.com/?size=100&id=2940&format=png&color=339AF0",
  },
  {
    name: "Adobe InDesign",
    icon: "https://img.icons8.com/?size=100&id=2732&format=png&color=339AF0",
  },
  {
    name: "Branding",
    icon: "https://img.icons8.com/?size=100&id=54501&format=png&color=339AF0",
  },
  {
    name: "Logo Design",
    icon: "https://img.icons8.com/?size=100&id=adfGQFjCB0Pw&format=png&color=339AF0",
  },
  {
    name: "ChatGPT",
    icon: "https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=339AF0",
  },
  {
    name: "CorelDRAW",
    icon: "https://img.icons8.com/?size=100&id=77638&format=png&color=339AF0",
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="skills" className="py-16 px-4 text-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-bold mb-4" data-aos="fade-down">
          Skills & Tools
        </h2>
        <p
          className="text-lg text-white/70 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Tools and techniques I use to bring ideas to life.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.7)]"
              />
              <p className="text-white/80 text-sm font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
