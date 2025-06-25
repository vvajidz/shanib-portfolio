import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PenTool, Layers, MonitorPlay, Paintbrush2 } from "lucide-react";

const services = [
  {
    title: "Brand Identity Design",
    description:
      "Crafting logos, typography, and visual systems that represent your brand with clarity and style.",
    icon: PenTool,
  },
  {
    title: "Advertising Design",
    description:
      "Creating impactful visuals for print and digital campaigns to boost your message.",
    icon: Layers,
  },
  {
    title: "Social Media Content",
    description:
      "Designing engaging graphics, reels, and stories for consistent brand presence online.",
    icon: MonitorPlay,
  },
  {
    title: "Creative Direction",
    description:
      "Leading the visual strategy across projects to ensure cohesive and high-quality outcomes.",
    icon: Paintbrush2,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="min-h-screen py-16 px-4 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          What I Offer
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Whether you're building a new brand or refreshing an old one, I deliver smart, stylish designs that connect with your audience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group hover:scale-[1.03]"
                data-aos="zoom-in-up"
                data-aos-delay={idx * 150}
              >
                <div className="p-6 text-left">
                  <div className="text-blue-400 mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {service.description}
                  </p>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 opacity-50 group-hover:opacity-100 transition duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
