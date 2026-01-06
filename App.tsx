import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-gray-300 font-sans selection:bg-brand-cyan selection:text-black overflow-x-hidden">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-24">
        <Hero />
        <About />
        <Solutions />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;