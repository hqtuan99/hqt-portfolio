import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-28 pb-10 relative overflow-hidden">
      {/* Background Gradient Effect - Animated */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob animation-delay-4000" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              <span className="text-brand-cyan text-xs font-bold tracking-widest uppercase">
                AI Operations Specialist
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
              Software Engineer <br className="hidden lg:block" />
              làm <span className="text-white italic font-serif relative inline-block">
                vận hành.
                <span className="absolute bottom-2 left-0 w-full h-3 bg-brand-cyan/20 -z-10 -rotate-2"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-400 font-medium mb-8 leading-snug">
               Tôi dùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] animate-shimmer font-semibold">AI & Automation</span> để cắt giảm những việc lặp đi lặp lại.
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tự động hóa Marketing, xử lý dữ liệu và tối ưu quy trình doanh nghiệp bằng tư duy hệ thống và công nghệ hiện đại.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <a 
                href="#contact"
                onClick={handleScrollToContact}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-brand-bg rounded-xl overflow-hidden bg-brand-cyan transition-transform active:scale-95 w-full sm:w-auto cursor-pointer shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]"
              >
                {/* Shimmer overlay */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
                
                <span className="relative z-20 flex items-center gap-2">
                  Tư vấn giải pháp ngay
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a 
                href="https://zalo.me/0818668686"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white rounded-xl border border-white/10 hover:bg-white/5 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all active:scale-95 w-full sm:w-auto"
              >
                <MessageCircle size={20} />
                Chat Zalo
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Portrait Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0 relative">
           <FadeIn delay={0.3} className="relative w-full max-w-sm lg:max-w-full">
              {/* Image Frame Decoration */}
              <div className="absolute -inset-1 bg-gradient-to-b from-brand-cyan/30 to-purple-600/30 rounded-[2.5rem] blur-xl opacity-70"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-card">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-30 z-10"></div>
                 <img 
                    src="/hero-portrait.jpg" 
                    alt="Hoàng Quốc Tuấn" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ aspectRatio: '3/4' }}
                 />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-cyan/10 rounded-full blur-xl z-0"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl z-0"></div>
           </FadeIn>
        </div>

      </div>
    </section>
  );
};

export default Hero;