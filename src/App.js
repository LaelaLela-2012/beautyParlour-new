import Blog from 'components/Blog';
import Contact from 'components/Contact';
import Footer from 'components/Footer';
import Home from 'components/Home';
import Milestones from 'components/Milestones';
import Portfolio from 'components/Portfolio';
import Pricing from 'components/Pricing';
import ScrollToTop from 'components/ScrollToTop';
import Services from 'components/Services';
import Skills from 'components/Skills';
import Testimonials from 'components/Testimonials';
import { motion } from 'framer-motion';
import React from 'react';

function App() {
  return (
    <motion.div initial="hidden" animate="show">
      <Home />
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Skills />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </motion.div>
  );
}

export default App