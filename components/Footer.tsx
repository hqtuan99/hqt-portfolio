import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-border py-12 bg-brand-bg relative overflow-hidden">
      {/* Background glow for footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-brand-border/30">
           <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-white tracking-tighter">HQT</span>
                <span className="h-4 w-px bg-gray-600"></span>
                <span className="text-brand-cyan font-medium">AI Operations Specialist</span>
              </div>
              <p className="text-gray-500 text-sm max-w-sm">
                Đồng hành cùng doanh nghiệp SME tối ưu vận hành và tự động hóa quy trình.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6">
              <a href="https://zalo.me/0818668686" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-brand-cyan transition-colors">
                <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center bg-brand-card">
                  <Phone size={14} />
                </div>
                <span className="text-sm font-medium">081.866.8686</span>
              </a>
              <a href="mailto:tuanhq.work@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-brand-cyan transition-colors">
                <div className="w-8 h-8 rounded-full border border-brand-border flex items-center justify-center bg-brand-card">
                   <Mail size={14} />
                </div>
                <span className="text-sm font-medium">tuanhq.work@gmail.com</span>
              </a>
           </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div>
            &copy; 2026 Hoàng Quốc Tuấn. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;