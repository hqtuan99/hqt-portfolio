import React from 'react';
import { Megaphone, FileText, MessageSquareHeart, ChevronRight } from 'lucide-react';
import FadeIn from './ui/FadeIn';
import SpotlightCard from './ui/SpotlightCard';

interface SolutionCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ icon, title, desc, delay }) => (
  <FadeIn delay={delay} className="h-full">
    <SpotlightCard className="h-full group">
      <div className="p-8 h-full flex flex-col relative z-10">
        <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-bg border border-brand-border text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:text-brand-cyan group-hover:border-brand-cyan/50 shadow-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
          {desc}
        </p>
        <div className="flex items-center text-sm font-semibold text-brand-cyan opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Tìm hiểu thêm <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </SpotlightCard>
  </FadeIn>
);

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-20 scroll-mt-28">
      <div className="mb-16">
        <FadeIn>
           <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-brand-cyan"></div>
            <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest">Giải pháp</h2>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Tối ưu hóa <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">nguồn lực.</span></h3>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SolutionCard 
          delay={0.1}
          icon={<Megaphone size={28} />}
          title="Marketing Automation"
          desc="AI Content & Video đa kênh - Sản xuất nội dung tự động, giảm 80% thời gian sáng tạo."
        />
        <SolutionCard 
          delay={0.2}
          icon={<FileText size={28} />}
          title="Operations Intelligence"
          desc="Xử lý dữ liệu & Giấy tờ - Chuyển đổi báo cáo thủ công thành Dashboard số liệu thời gian thực."
        />
        <SolutionCard 
          delay={0.3}
          icon={<MessageSquareHeart size={28} />}
          title="Customer Care AI"
          desc="AI Chatbot thông minh - Phản hồi khách hàng dựa trên dữ liệu doanh nghiệp 24/7."
        />
      </div>
    </section>
  );
};

export default Solutions;