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
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center pt-20 relative overflow-hidden">
      {/* Background Gradient Effect - Animated */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob mix-blend-screen" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob animation-delay-4000" />

      <div className="max-w-4xl relative z-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-brand-cyan/30 rounded-full bg-brand-cyan/5 backdrop-blur-sm">
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            Software Engineer <br className="hidden md:block" />
            làm <span className="text-white italic font-serif">vận hành.</span>
          </h1>
          <h2 className="text-3xl md:text-5xl text-gray-400 font-medium mb-8">
             Tôi dùng <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-cyan bg-[length:200%_auto] animate-shimmer">AI & Automation</span> để cắt giảm những việc lặp đi lặp lại.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
            Tự động hóa Marketing, xử lý dữ liệu và tối ưu quy trình doanh nghiệp bằng tư duy hệ thống và công nghệ hiện đại.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <a 
              href="#contact"
              onClick={handleScrollToContact}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-brand-bg rounded-full overflow-hidden bg-brand-cyan transition-transform active:scale-95 w-full sm:w-auto cursor-pointer"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10" />
              
              <span className="relative z-20 flex items-center gap-2">
                Tư vấn giải pháp ngay
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              
              {/* Button Glow */}
              <div className="absolute inset-0 rounded-full blur-lg bg-brand-cyan/50 opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
            </a>

            <a 
              href="https://zalo.me/0818668686"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white rounded-full border border-white/20 hover:bg-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-all active:scale-95 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Chat Zalo: 081.866.8686
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;