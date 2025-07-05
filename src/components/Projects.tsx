
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Growth Campaign',
      description: 'Tăng 300% doanh thu cho shop thời trang online thông qua chiến lược multi-channel marketing',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Social Media', 'PPC', 'Email Marketing'],
      results: '+300% Revenue, +150% Traffic'
    },
    {
      title: 'Brand Awareness Campaign',
      description: 'Xây dựng nhận diện thương hiệu cho startup công nghệ từ 0 đến 10M+ reach',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Content Marketing', 'Influencer', 'PR'],
      results: '10M+ Reach, 50K+ Followers'
    },
    {
      title: 'B2B Lead Generation',
      description: 'Tối ưu hóa funnel marketing cho doanh nghiệp B2B, tăng 200% qualified leads',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['LinkedIn Ads', 'Marketing Automation', 'Content'],
      results: '+200% Qualified Leads'
    },
    {
      title: 'App Launch Campaign',
      description: 'Chiến lược launch app mobile với 100K+ downloads trong tháng đầu',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['ASO', 'Social Media', 'Influencer Marketing'],
      results: '100K+ Downloads, #3 App Store'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Dự án nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những campaign marketing thành công mà tôi đã thực hiện cho các khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30">
                    <Eye size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-600 font-semibold">{project.results}</div>
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium">
                    Chi tiết <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
