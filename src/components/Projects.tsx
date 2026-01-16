import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectsProps {
  language: 'ar' | 'en';
}

interface Project {
  id: number;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  problemAr: string;
  problemEn: string;
  solutionAr: string;
  solutionEn: string;
  technologies: string[];
  images: string[];
  link: string;
}

export function Projects({ language }: ProjectsProps) {
  const content = {
    ar: {
      title: 'المشاريع',
      subtitle: 'مختارات من أعمالي في بناء منتجات رقمية قوية',
      problem: 'المشكلة:',
      solution: 'الحل:',
      viewProject: 'عرض المشروع المباشر',
      tech: 'التقنيات المستخدمة',
    },
    en: {
      title: 'Projects',
      subtitle: 'Selected work in building powerful digital products',
      problem: 'Problem:',
      solution: 'Solution:',
      viewProject: 'View Live Project',
      tech: 'Technologies Used',
    },
  };

  const t = content[language];

  const projects: Project[] = [
    {
      id: 1,
      nameAr: 'منصة إدارة المشاريع المتقدمة',
      nameEn: 'Advanced Project Management Platform',
      descriptionAr: 'نظام شامل لإدارة المشاريع والفرق',
      descriptionEn: 'Comprehensive system for project and team management',
      problemAr: 'الشركات تواجه صعوبة في تتبع المشاريع المتعددة وتنسيق الفرق الموزعة جغرافياً',
      problemEn: 'Companies struggle to track multiple projects and coordinate distributed teams',
      solutionAr: 'منصة متكاملة توفر لوحة تحكم في الوقت الفعلي، إدارة المهام، تتبع الوقت، وتقارير تحليلية متقدمة',
      solutionEn: 'Integrated platform with real-time dashboard, task management, time tracking, and advanced analytics',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      images: [
        'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njg1ODg4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1750056393300-102f7c4b8bc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzY4NTc3OTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1684569547117-e2d19fc6d796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3Njg0NzQyNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      nameAr: 'تطبيق التجارة الإلكترونية المتعدد البائعين',
      nameEn: 'Multi-Vendor E-commerce Application',
      descriptionAr: 'منصة تجارة إلكترونية شاملة للبائعين المتعددين',
      descriptionEn: 'Comprehensive multi-vendor e-commerce platform',
      problemAr: 'البائعون الصغار يحتاجون إلى منصة موثوقة وسهلة الاستخدام لبيع منتجاتهم عبر الإنترنت',
      problemEn: 'Small vendors need a reliable and easy-to-use platform to sell their products online',
      solutionAr: 'منصة متكاملة تشمل واجهة للعملاء، لوحة تحكم للبائعين، نظام دفع آمن، وإدارة المخزون الذكية',
      solutionEn: 'Integrated platform with customer interface, vendor dashboard, secure payment system, and smart inventory management',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB', 'AWS S3'],
      images: [
        'https://images.unsplash.com/photo-1732258355931-f573ca2eaee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybSUyMHNjcmVlbnxlbnwxfHx8fDE3Njg1ODg4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTQ3MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1741466071728-cc5691bfb535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMHNldHVwfGVufDF8fHx8MTc2ODUxNTkzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      nameAr: 'تطبيق الهاتف للصحة واللياقة',
      nameEn: 'Health & Fitness Mobile App',
      descriptionAr: 'تطبيق شامل لتتبع الصحة واللياقة البدنية',
      descriptionEn: 'Comprehensive health and fitness tracking application',
      problemAr: 'المستخدمون يجدون صعوبة في الالتزام بأهداف اللياقة البدنية وتتبع تقدمهم',
      problemEn: 'Users struggle to stick to fitness goals and track their progress',
      solutionAr: 'تطبيق تفاعلي يوفر خطط تمرين مخصصة، تتبع التغذية، تحليلات الأداء، ومدرب افتراضي مدعوم بالذكاء الاصطناعي',
      solutionEn: 'Interactive app with personalized workout plans, nutrition tracking, performance analytics, and AI-powered virtual coach',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'HealthKit', 'GraphQL'],
      images: [
        'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzY4NTQ3MDg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1665043548008-82dc5e992df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2ODU4OTIzNXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1658806300183-342fe517d68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWJzdHJhY3QlMjBhcnR8ZW58MXx8fHwxNzY4NTg5MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: 'https://example.com/project3',
    },
    {
      id: 4,
      nameAr: 'نظام إدارة علاقات العملاء للشركات',
      nameEn: 'Enterprise CRM System',
      descriptionAr: 'نظام متطور لإدارة علاقات العملاء',
      descriptionEn: 'Advanced customer relationship management system',
      problemAr: 'الشركات الكبيرة تعاني من تشتت بيانات العملاء وضعف التواصل بين الأقسام',
      problemEn: 'Large companies suffer from scattered customer data and poor inter-department communication',
      solutionAr: 'نظام مركزي موحد لإدارة العملاء، أتمتة المبيعات، تتبع التفاعلات، وتحليلات ذكاء الأعمال',
      solutionEn: 'Unified central system for customer management, sales automation, interaction tracking, and business intelligence analytics',
      technologies: ['Vue.js', 'Python', 'Django', 'Elasticsearch', 'Kubernetes'],
      images: [
        'https://images.unsplash.com/photo-1582138825658-fb952c08b282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwd29ya3NwYWNlfGVufDF8fHx8MTc2ODUyODgxMHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1658274474930-bb27a64022c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc2ODU0MzI5OHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njg1ODg4NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
      link: 'https://example.com/project4',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});

  const nextImage = (projectId: number, maxImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % maxImages,
    }));
  };

  const prevImage = (projectId: number, maxImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + maxImages) % maxImages,
    }));
  };

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden" id="projects">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.title}
          </motion.h2>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 lg:gap-16 items-center`}>
                
                {/* Project Images Gallery */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    {/* Main Image Container */}
                    <div className="relative overflow-hidden rounded-3xl">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 z-10"
                        whileHover={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex[project.id] || 0}
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ImageWithFallback
                            src={project.images[currentImageIndex[project.id] || 0]}
                            alt={language === 'ar' ? project.nameAr : project.nameEn}
                            className="w-full h-[400px] md:h-[500px] object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <motion.button
                            onClick={() => prevImage(project.id, project.images.length)}
                            className={`absolute top-1/2 ${language === 'ar' ? 'right-4' : 'left-4'} transform -translate-y-1/2 z-20 w-12 h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all border border-white/20`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
                          </motion.button>
                          <motion.button
                            onClick={() => nextImage(project.id, project.images.length)}
                            className={`absolute top-1/2 ${language === 'ar' ? 'left-4' : 'right-4'} transform -translate-y-1/2 z-20 w-12 h-12 bg-black/70 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/90 transition-all border border-white/20`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                          </motion.button>
                        </>
                      )}

                      {/* Image Indicators */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                          {project.images.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [project.id]: imgIndex }))}
                              className={`h-2 rounded-full transition-all ${
                                (currentImageIndex[project.id] || 0) === imgIndex
                                  ? 'w-8 bg-white'
                                  : 'w-2 bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <motion.div
                    className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm rounded-full text-sm border border-purple-500/30 text-purple-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {language === 'ar' ? 'مشروع' : 'Project'} {String(project.id).padStart(2, '0')}
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                    {language === 'ar' ? project.nameAr : project.nameEn}
                  </h3>

                  <p className="text-lg md:text-xl text-gray-400">
                    {language === 'ar' ? project.descriptionAr : project.descriptionEn}
                  </p>

                  {/* Problem & Solution */}
                  <div className="space-y-4 py-6 border-t border-b border-white/10">
                    <motion.div
                      initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-sm text-purple-400 mb-2 font-semibold">{t.problem}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {language === 'ar' ? project.problemAr : project.problemEn}
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-sm text-blue-400 mb-2 font-semibold">{t.solution}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {language === 'ar' ? project.solutionAr : project.solutionEn}
                      </p>
                    </motion.div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-sm text-gray-500 mb-3">{t.tech}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm hover:bg-white/10 hover:border-white/20 transition-all text-gray-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{t.viewProject}</span>
                    <ExternalLink className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ x: '100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
