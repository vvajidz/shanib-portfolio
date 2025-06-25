import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.success("Message sent successfully!", {
      style: {
        background: "#0f172a",
        color: "#60a5fa",
        border: "1px solid #3b82f6",
        borderRadius: "0.75rem",
      },
      iconTheme: {
        primary: "#60a5fa",
        secondary: "#0f172a",
      },
    });

    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-4 text-white"
      data-aos="fade-up"
    >
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4" data-aos="fade-down">
          Let's Connect
        </h2>
        <p className="text-lg text-white/70 mb-10" data-aos="fade-up" data-aos-delay="100">
          Have a project or just want to say hello? I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl p-6 rounded-xl shadow-xl max-w-2xl mx-auto mb-10 space-y-4 border border-white/10"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info / Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-400 text-base font-medium" data-aos="fade-up" data-aos-delay="300">
          <div className="flex items-center gap-2">
  <Mail size={20} />
  <a
    href="https://mail.google.com/mail/?view=cm&to=dmshanib@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    dmshanib@gmail.com
  </a>
</div>
          <div className="flex items-center gap-2">
  <Phone size={20} />
  <a
    href="https://wa.me/919526954208"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    +91 95269 54208
  </a>
</div>
          <div className="flex items-center gap-2">
            <Linkedin size={20} />
            <a
              href="https://www.linkedin.com/in/mohammed-shanib-a33b761b2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Linkedin Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
