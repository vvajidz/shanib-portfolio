import { lazy, Suspense, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Layout from "./Components/Layout";
import Navbar from "./Components/Navbar";
import Loader from "./loading/Loading";

// Lazy load components
const Home = lazy(() => import("./Components/Home"));
const Portfolio = lazy(() => import("./Components/Portfolio"));
const Skills = lazy(() => import("./Components/Skills"));
const Services = lazy(() => import("./Components/Services"));
const About = lazy(() => import("./Components/About"));
const Contact = lazy(() => import("./Components/Contact"));

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const timer = setTimeout(() => setInitialLoading(false),1000); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {initialLoading && <Loader />} {/* Initial full-page splash loader */}

      {!initialLoading && (
        <Layout>
          <Navbar />
          <Suspense fallback={<Loader />}>
            <Home />
            <Portfolio />
            <Skills />
            <Services />
            <About />
            <Contact />
          </Suspense>
        </Layout>
      )}
    </>
  );
}

export default App;
