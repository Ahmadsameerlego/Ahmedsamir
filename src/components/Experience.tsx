import { Building2, Calendar, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

interface ExperienceProps {
  language: 'ar' | 'en';
}

interface Company {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
}

export function Experience({ language }: ExperienceProps) {
  const content = {
    ar: {
      title: 'الخبرة العملية',
      subtitle: 'الشركات التي شرفت بالعمل معها',
      companies: [
        {
          id: 1,
          name: 'AAIT',
          role: 'مهندس برمجيات أول',
          period: '2024 - حتى الآن',
          description: 'قيادة تطوير منصات تقنية متقدمة وإدارة فرق التطوير',
        },
        {
          id: 2,
          name: 'Codebase',
          role: 'مهندس برمجيات',
          period: '2023 - 2024',
          description: 'تطوير حلول برمجية مبتكرة للعملاء المحليين والدوليين',
        },
        {
          id: 3,
          name: 'Code7x',
          role: 'مطور Full Stack',
          period: '2022 - 2023',
          description: 'بناء تطبيقات ويب وموبايل عالية الأداء',
        },
        {
          id: 4,
          name: 'Overpowered Agency',
          role: 'مطور Frontend',
          period: '2021 - 2022',
          description: 'تصميم وتطوير واجهات مستخدم حديثة وتفاعلية',
        },
        {
          id: 5,
          name: 'IX Solutions',
          role: 'مطور مبتدئ',
          period: '2020 - 2021',
          description: 'بداية المسيرة المهنية في تطوير الويب',
        },
      ],
    },
    en: {
      title: 'Experience',
      subtitle: 'Companies I had the honor to work with',
      companies: [
        {
          id: 1,
          name: 'AAIT',
          role: 'Senior Software Engineer',
          period: '2024 - Present',
          description: 'Leading development of advanced tech platforms and managing development teams',
        },
        {
          id: 2,
          name: 'Codebase',
          role: 'Software Engineer',
          period: '2023 - 2024',
          description: 'Developing innovative software solutions for local and international clients',
        },
        {
          id: 3,
          name: 'Code7x',
          role: 'Full Stack Developer',
          period: '2022 - 2023',
          description: 'Building high-performance web and mobile applications',
        },
        {
          id: 4,
          name: 'Overpowered Agency',
          role: 'Frontend Developer',
          period: '2021 - 2022',
          description: 'Designing and developing modern, interactive user interfaces',
        },
        {
          id: 5,
          name: 'IX Solutions',
          role: 'Junior Developer',
          period: '2020 - 2021',
          description: 'Started my professional journey in web development',
        },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Briefcase className="w-12 h-12 text-purple-600" />
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            {t.title}
          </h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <p className="text-xl md:text-2xl text-gray-600">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Companies Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-purple-300 via-blue-300 to-purple-300 hidden md:block"
            style={language === 'ar' ? { right: '1.5rem' } : { left: '1.5rem' }}
          ></div>

          {/* Companies List */}
          <div className="space-y-16">
            {t.companies.map((company, index) => (
              <motion.div
                key={company.id}
                className={`relative ${language === 'ar' ? 'md:pr-24' : 'md:pl-24'} group`}
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`absolute top-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-xl hidden md:flex items-center justify-center ${
                    language === 'ar' ? 'right-0' : 'left-0'
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </motion.div>

                {/* Company Card */}
                <motion.div
                  className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 group-hover:border-purple-200 overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Card Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <motion.h3
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                      >
                        {company.name}
                      </motion.h3>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                        <Calendar className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-semibold text-gray-700">{company.period}</span>
                      </div>
                    </div>
                    <p className="text-xl md:text-2xl text-gray-800 mb-4 font-semibold">
                      {company.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {company.description}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <motion.div
                    className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-3xl`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
