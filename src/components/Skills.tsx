
import { BarChart, Users, Megaphone, PenTool, Target, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      skills: [
        { name: 'Social Media Marketing', level: 95 },
        { name: 'Google Ads & Facebook Ads', level: 90 },
        { name: 'SEO/SEM', level: 85 },
        { name: 'Email Marketing', level: 88 }
      ]
    },
    {
      title: 'Analytics & Data',
      icon: BarChart,
      skills: [
        { name: 'Google Analytics', level: 92 },
        { name: 'Marketing Automation', level: 85 },
        { name: 'A/B Testing', level: 88 },
        { name: 'Data Visualization', level: 80 }
      ]
    },
    {
      title: 'Creative & Content',
      icon: PenTool,
      skills: [
        { name: 'Content Strategy', level: 90 },
        { name: 'Copywriting', level: 88 },
        { name: 'Brand Development', level: 85 },
        { name: 'Video Marketing', level: 82 }
      ]
    }
  ];

  const tools = [
    'Google Analytics', 'Facebook Business', 'Google Ads', 'HubSpot', 
    'Mailchimp', 'Canva', 'Adobe Creative Suite', 'Hootsuite',
    'SEMrush', 'Hotjar', 'Zapier', 'Slack'
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Kỹ năng & Chuyên môn
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tổng hợp những kỹ năng và công cụ marketing mà tôi thành thạo
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-purple-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Công cụ Marketing</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200 text-purple-700 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
