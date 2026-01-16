import { Code2, Sparkles, Target, Users, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutProps {
  language: 'ar' | 'en';
}

export function About({ language }: AboutProps) {
  const content = {
    ar: {
      title: 'من أنا',
      subtitle: 'شغفي هو تحويل الأفكار إلى واقع رقمي',
      bio: 'مهندس برمجيات شغوف بخبرة 5 سنوات في بناء حلول رقمية مبتكرة. متخصص في تطوير تطبيقات الويب والموبايل عالية الأداء باستخدام أحدث التقنيات. أؤمن بأن الكود الجيد هو مزيج من البساطة والقوة والقابلية للصيانة.',
      bio2: 'عملت مع شركات ناشئة ووكالات محلية ودولية، وساهمت في بناء منتجات رقمية حققت نجاحاً ملموساً. أركز على فهم احتياجات العمل وترجمتها إلى حلول تقنية فعّالة تحقق قيمة حقيقية.',
      valuesTitle: 'قيمي في العمل',
      values: [
        {
          icon: Code2,
          title: 'كود نظيف',
          description: 'أكتب كود قابل للقراءة والصيانة يسهل على الفريق العمل عليه',
        },
        {
          icon: Target,
          title: 'تركيز على النتائج',
          description: 'أولويتي هي تحقيق الأهداف التجارية وتقديم قيمة حقيقية',
        },
        {
          icon: Sparkles,
          title: 'جودة عالية',
          description: 'لا أقبل بأقل من التميز في كل مشروع أعمل عليه',
        },
        {
          icon: Zap,
          title: 'أداء سريع',
          description: 'أحرص على بناء تطبيقات سريعة ومُحسّنة للأداء',
        },
      ],
    },
    en: {
      title: 'About Me',
      subtitle: 'My passion is turning ideas into digital reality',
      bio: 'Passionate software engineer with 5 years of experience building innovative digital solutions. Specialized in developing high-performance web and mobile applications using cutting-edge technologies. I believe good code is a blend of simplicity, power, and maintainability.',
      bio2: 'I have worked with startups and local and international agencies, contributing to digital products that achieved tangible success. I focus on understanding business needs and translating them into effective technical solutions that deliver real value.',
      valuesTitle: 'My Work Values',
      values: [
        {
          icon: Code2,
          title: 'Clean Code',
          description: 'I write readable and maintainable code that makes it easy for the team to work on',
        },
        {
          icon: Target,
          title: 'Results Focused',
          description: 'My priority is achieving business goals and delivering real value',
        },
        {
          icon: Sparkles,
          title: 'High Quality',
          description: 'I accept nothing less than excellence in every project I work on',
        },
        {
          icon: Zap,
          title: 'Fast Performance',
          description: 'I ensure building fast and performance-optimized applications',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-purple-600">{t.subtitle}</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">
                {t.title}
              </h2>
              
              <motion.div
                className="h-1.5 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 128 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>

            <div className="space-y-6">
              <motion.p
                className="text-xl md:text-2xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {t.bio}
              </motion.p>
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t.bio2}
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Images Collage */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="space-y-4"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="relative group overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc2ODU0MzI5OHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Coding"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1665043548008-82dc5e992df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODU4OTIzNXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Architecture"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
              <motion.div
                className="space-y-4 pt-12"
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative group overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1741466071728-cc5691bfb535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc2ODUxNTkzNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Workspace"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="relative group overflow-hidden rounded-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzY4NTg5MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Digital Art"
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Decorative Element */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-2xl"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {t.valuesTitle}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-16 h-16 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-tl-3xl`} />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
