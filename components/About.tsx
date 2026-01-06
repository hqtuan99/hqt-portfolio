import React from 'react';
import { Terminal, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import SpotlightCard from './ui/SpotlightCard';

const About: React.FC = () => {
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
    <section id="about" className="py-20 relative scroll-mt-28">
       {/* Background Grid Decoration */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10 pointer-events-none"></div>

      <FadeIn>
        <div className="flex items-center gap-2 mb-10">
          <div className="h-px w-8 bg-brand-cyan"></div>
          <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest">Về tôi</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column: Personal Story */}
        <FadeIn className="h-full" delay={0.1}>
          <SpotlightCard className="h-full">
            <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                 <Terminal size={120} />
              </div>
              
              <div className="mb-2">
                <div className="w-14 h-14 bg-brand-bg/50 backdrop-blur-md rounded-xl flex items-center justify-center border border-brand-border mb-6 text-brand-cyan shadow-[0_0_20px_-5px_rgba(0,245,255,0.3)]">
                  <Terminal size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Từ <span className="text-gray-400 line-through decoration-brand-cyan/50">Coder</span> đến <span className="text-brand-cyan">Nhà vận hành thực chiến</span>
                </h3>
                
                <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                  <p>
                    Tôi dành 3 năm đầu sự nghiệp để làm Software Engineer, làm việc với những dòng code và hệ thống logic. Nhưng mọi thứ trở nên thú vị hơn khi tôi trực tiếp tham gia <span className="text-white font-medium">vận hành một doanh nghiệp y tế</span> trong gần một năm qua.
                  </p>
                  <p>
                    Khoảng thời gian đó giúp tôi nhận ra: Giữa "Công nghệ AI" và "Thực tế vận hành" vẫn còn một khoảng trống rất lớn.
                  </p>
                  <p>
                    Từ những câu hỏi về việc nhập liệu thủ công, quy trình tuyển dụng hay gánh nặng content marketing, tôi bắt đầu áp dụng AI để thay đổi cách làm việc. <span className="text-white font-medium italic">Không phải là lý thuyết xa vời, mà là những hệ thống thực tế.</span>
                  </p>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Right Column: Pain Points & CTA */}
        <FadeIn className="h-full" delay={0.2}>
          <SpotlightCard className="h-full bg-gradient-to-br from-brand-card via-brand-card to-brand-cyan/5 border-brand-cyan/20">
            <div className="p-8 md:p-10 flex flex-col justify-between h-full relative z-10">
              
              <div>
                <div className="flex items-center gap-3 mb-6 text-brand-cyan">
                  <AlertCircle size={24} />
                  <span className="font-bold tracking-wide uppercase text-sm">Vấn đề thực tế</span>
                </div>
                
                <h4 className="text-3xl font-bold text-white mb-8 leading-tight">
                  Bạn có đang gặp những <span className="text-brand-cyan">nút thắt</span> này?
                </h4>
                
                <ul className="space-y-6 mb-8">
                  {[
                    "Quy trình Marketing ngốn quá nhiều thời gian nhưng hiệu quả chưa tới?",
                    "Dữ liệu doanh nghiệp nằm rải rác và không biết bắt đầu từ đâu?",
                    "Đội ngũ nhân sự đang quá tải với những công việc lặp đi lặp lại?"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="mt-1 min-w-[20px] text-brand-cyan">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-gray-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Area */}
              <div className="mt-auto pt-8 border-t border-white/10">
                <p className="text-gray-400 italic mb-6 text-sm">
                  "Thay vì ngồi liệt kê tất cả những gì tôi có, tôi thích bắt đầu bằng một cuộc trò chuyện về những điểm nghẽn của bạn."
                </p>
                <a 
                  href="#contact"
                  onClick={handleScrollToContact}
                  className="group flex items-center justify-center gap-2 w-full bg-white text-brand-bg font-bold py-4 rounded-xl hover:bg-brand-cyan transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)]"
                >
                  Trò chuyện cùng tôi
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </SpotlightCard>
        </FadeIn>

      </div>
    </section>
  );
};

export default About;