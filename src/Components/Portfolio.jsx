import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const categories = [
  {
    title: "Posters",
    description: "A wide range of digital and print posters for events, ads, and more.",
    driveLink: "https://drive.google.com/drive/folders/1GTgLZRpOf8jUZiJSSafP85LzR6_RURCa?usp=sharing",
  },
  {
    title: "Brochures",
    description: "Creative brochure designs showcasing layouts and branding.",
    driveLink: "https://drive.google.com/drive/folders/14Egihph_G68v6Ux8Wma7kG0wh7vrunkn?usp=drive_link",
  },
  {
    title: "Logos",
    description: "Minimal, modern and expressive logos crafted for brands.",
    driveLink: "https://drive.google.com/drive/folders/1JbqdcvhPJrtofTPZXNpNnTvkhP8xLx5C?usp=sharing",
  },
  {
    title: "Others",
    description: "Diverse design works including banners, hoardings, invites, packges and many others.. .",
    driveLink: "https://drive.google.com/drive/folders/1RlFg5qmWm8hn05ycxCr9AiYcWYRaXObu?usp=drive_link",
  },
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="portfolio" data-aos="fade-up" className="px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-aos="fade-down">
          My Work
        </h2>
        <p
          className="text-base sm:text-lg text-white/70 mb-12 sm:mb-16 max-w-3xl mx-auto font-light"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore categories of my creative projects — from branding to large-scale ads.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-slate-800/30 backdrop-blur-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group hover:scale-[1.03]"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="relative h-36 sm:h-48 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/0 rounded-t-2xl sm:rounded-t-3xl">
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-poppins text-center px-2">
                  {cat.title}
                </h3>
              </div>

              <div className="p-4 sm:p-5 text-left">
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed mb-4">
                  {cat.description}
                </p>
                <a
                  href={cat.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium shadow-md">
                    View on Drive
                  </button>
                </a>
              </div>

              <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
