import React from 'react';
import { Search, PenTool, Rocket, Settings } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Process: React.FC = () => {
  const steps = [
    { id: 1, title: 'Khảo sát', icon: <Search size={24} /> },
    { id: 2, title: 'Thiết kế luồng', icon: <PenTool size={24} /> },
    { id: 3, title: 'Triển khai', icon: <Rocket size={24} /> },
    { id: 4, title: 'Tối ưu', icon: <Settings size={24} /> },
  ];

  return (
    <section id="process" className="py-24 border-y border-brand-border/30 bg-brand-bg/50 relative overflow-hidden scroll-mt-28">
       {/* Background Glow */}
       <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-cyan/5 rounded-[100%] blur-[100px] pointer-events-none"></div>

      <div className="text-center mb-20 relative z-10">
        <FadeIn>
          <div className="inline-block mb-4">
             <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest border border-brand-cyan/20 px-4 py-1 rounded-full bg-brand-cyan/5">Quy trình làm việc</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Đơn giản. Hiệu quả. Minh bạch.</h3>
        </FadeIn>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[2.5rem] left-0 w-full px-16 z-0">
           <div className="h-0.5 w-full bg-brand-border relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50 animate-shimmer" style={{ backgroundSize: '50% 100%' }}></div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 0.15}>
              <div className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 mb-8">
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-brand-bg border border-brand-border text-brand-cyan text-xs font-mono flex items-center justify-center z-20 group-hover:border-brand-cyan transition-colors">
                    0{step.id}
                  </div>
                  
                  {/* Icon Container */}
                  <div className="w-full h-full rounded-2xl bg-brand-dark/80 backdrop-blur-sm border border-brand-border flex items-center justify-center text-gray-400 group-hover:border-brand-cyan group-hover:text-brand-cyan group-hover:shadow-[0_0_25px_rgba(0,245,255,0.25)] transition-all duration-500 relative z-10">
                    {step.icon}
                  </div>

                   {/* Icon Glow Behind */}
                   <div className="absolute inset-0 bg-brand-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{step.title}</h4>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;