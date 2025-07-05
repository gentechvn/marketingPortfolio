
import { Target, TrendingUp, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Target, label: 'Campaigns thành công', value: '150+' },
    { icon: TrendingUp, label: 'Tăng trưởng ROI trung bình', value: '250%' },
    { icon: Users, label: 'Khách hàng hài lòng', value: '50+' },
    { icon: Award, label: 'Giải thưởng marketing', value: '8' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Về tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Tôi là một marketing strategist đam mê với việc tạo ra những chiến lược marketing sáng tạo 
            và hiệu quả, giúp các thương hiệu đạt được mục tiêu kinh doanh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold mb-6 text-gray-800">
              Chuyên gia Marketing Digital
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực marketing digital, tôi đã giúp hàng chục 
              doanh nghiệp từ startup đến tập đoàn lớn xây dựng thương hiệu mạnh mẽ và tăng trưởng 
              doanh thu bền vững.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Chuyên môn của tôi bao gồm: Social Media Marketing, Content Marketing, SEO/SEM, 
              Email Marketing, Marketing Automation, và Data Analytics.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Tải CV
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Marketing Professional" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-2xl mb-4 inline-block group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
