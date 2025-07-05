
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@marketingpro.com' },
    { icon: Phone, label: 'Điện thoại', value: '+84 123 456 789' },
    { icon: MapPin, label: 'Địa chỉ', value: 'TP. Hồ Chí Minh, Việt Nam' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Liên hệ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sẵn sàng bắt đầu dự án marketing tiếp theo? Hãy liên hệ với tôi để thảo luận
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8">Thông tin liên hệ</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white/10 p-3 rounded-xl mr-4">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{info.label}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Kết nối với tôi</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-6">Gửi tin nhắn</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ tên *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-300"
                    placeholder="Nhập họ tên của bạn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-300"
                    placeholder="Nhập email của bạn"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Chủ đề</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-300"
                  placeholder="Chủ đề tin nhắn"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Tin nhắn *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-purple-400 focus:outline-none text-white placeholder-gray-300 resize-none"
                  placeholder="Nội dung tin nhắn..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
