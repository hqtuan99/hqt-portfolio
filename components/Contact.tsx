import React, { useState } from 'react';
import { Send, Mail, Phone, ExternalLink } from 'lucide-react';
import FadeIn from './ui/FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Info */}
        <FadeIn>
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-brand-cyan"></div>
              <h2 className="text-sm font-bold text-brand-cyan uppercase tracking-widest">Liên hệ</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Kết nối trực tiếp <br/> với tôi.</h3>
            <p className="text-gray-400 mb-10 text-lg max-w-md">
              Trao đổi nhanh qua Zalo hoặc để lại lời nhắn chi tiết qua Email. Tôi luôn sẵn sàng lắng nghe bài toán của bạn.
            </p>

            <div className="flex flex-col gap-4">
               {/* Phone / Zalo Card */}
               <a 
                 href="https://zalo.me/0818668686" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center gap-6 p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all duration-300"
               >
                 <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform border border-brand-border">
                    <Phone size={24} />
                 </div>
                 <div>
                    <div className="text-sm text-gray-400 mb-1">Hotline / Zalo</div>
                    <div className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">081.866.8686</div>
                 </div>
                 <ExternalLink size={18} className="ml-auto text-gray-500 group-hover:text-brand-cyan opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
               </a>

               {/* Email Card */}
               <a 
                 href="mailto:tuanhq.work@gmail.com"
                 className="group flex items-center gap-6 p-6 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-cyan/50 hover:bg-brand-cyan/5 transition-all duration-300"
               >
                 <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-brand-cyan group-hover:scale-110 transition-transform border border-brand-border">
                    <Mail size={24} />
                 </div>
                 <div>
                    <div className="text-sm text-gray-400 mb-1">Email làm việc</div>
                    <div className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">tuanhq.work@gmail.com</div>
                 </div>
                  <ExternalLink size={18} className="ml-auto text-gray-500 group-hover:text-brand-cyan opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
               </a>
            </div>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn delay={0.2} className="relative">
          {/* Decorative glow behind form */}
          <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-blue-600/20 rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>
          
          <form onSubmit={handleSubmit} className="relative bg-brand-bg/80 backdrop-blur-xl border border-brand-border rounded-2xl p-8 space-y-6 shadow-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Tên của bạn</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                placeholder="contact@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Vấn đề cần tư vấn</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full bg-brand-dark/50 border border-brand-border rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                placeholder="Tôi muốn tối ưu quy trình marketing..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-brand-bg font-bold py-4 rounded-xl hover:bg-brand-cyan transition-colors flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)]"
            >
              Gửi yêu cầu <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </FadeIn>

      </div>
    </section>
  );
};

export default Contact;