import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import ix1 from '../assets/601.png';
import ix2 from '../assets/602.png';
import ix3 from '../assets/603.png';
import ix4 from '../assets/604.png';
import ix5 from '../assets/605.png';
// deeper 
import deeper1 from '../assets/deep1.png';
import deeper2 from '../assets/deep2.png';
import deeper3 from '../assets/deep3.png';
import deeper4 from '../assets/deep4.jpg';
import deeper5 from '../assets/deep5.jpg';

import n1 from '../assets/n1.png';
import n2 from '../assets/n2.png';
import n3 from '../assets/n3.png';


import z1 from '../assets/z1.png';
import z2 from '../assets/z2.png';
import z3 from '../assets/z3.png';
import z4 from '../assets/z4.png';
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
      nameAr: '60ix',
      nameEn: '60ix',
      descriptionAr: '60IX منصة رقمية متخصصة في منتجات وخدمات رعاية الحيوانات الأليفة والخيول، بتجمع كل احتياجات المستخدمين في مكان واحد بتجربة استخدام بسيطة ومنظمة.',
      descriptionEn: '60IX is a digital platform specializing in pet and livestock products and services, bringing all user needs together in one place with a simple and organized user experience.',
      problemAr: 'السوق كان بيعاني من تشتت الخدمات والمنتجات وعدم وجود منصة موثوقة تجمع مزودي الخدمات ومحبي الحيوانات في مكان واحد.',
      problemEn: 'The market was suffering from the fragmentation of services and products, and the absence of a reliable platform to bring service providers and pet lovers together.',
      solutionAr: 'تصميم وتنفيذ منصة موحدة بتربط المستخدمين بمزودي الخدمات والمنتجات، مع واجهة سهلة وتنظيم واضح يسهل الوصول لكل الخدمات بسرعة.',
      solutionEn: 'Design and implementation of a unified platform connecting users with service providers and pet lovers, with a simple and organized interface making it easy to access all services quickly.',
      technologies: ['Vue.Js', 'Nuxt.Js', 'TypeScript', 'Rest API', 'Pinia', 'Tailwind CSS', 'Socket.io', 'Laravel', 'MySQL', 'AWS'],
      images: [
        ix3,

        ix2,
        ix4,
        ix5,
        ix1,

      ],
      link: 'https://60ix.com/',
    },
    {
      id: 2,
      nameAr: 'Contracting System',
      nameEn: 'Contracting System',
      descriptionAr: 'Contracting System هو نظام رقمي متقدّم للذكاء الاصطناعي والرؤية الحاسوبية بيحوّل البيانات البصرية (صور/فيديو) إلى تحليلات ورؤى ذكية تُستخدم في الأتمتة واتخاذ القرار في الأعمال.',
      descriptionEn: 'Contracting System is an advanced digital system for artificial intelligence and computer vision that converts visual data (images/videos) into smart analyses and intelligent views used in automation and decision-making in business.',
      problemAr: 'كان في صعوبة في تحليل البيانات البصرية الكبيرة تلقائيًا بدون تدخل بشري دقيق، خصوصًا في التطبيقات الصناعية/المراقبة حيث البيانات الضخمة بتحتاج تحليل فوري وذكي.',
      problemEn: 'It was difficult to automatically analyze large visual data without precise human intervention, especially in industrial/monitoring applications where large data requires immediate and smart analysis.',
      solutionAr: 'قدّمنا واجهة ونظام متكامل بيستخدم تقنيات الذكاء الاصطناعي لتحليل الصور والفيديو realtime، وبيدّي نتائج فورية ورؤى واضحة بدل التحليل اليدوي التقليدي.',
      solutionEn: 'We provided an integrated interface and system that uses artificial intelligence techniques to analyze images and videos in real-time, and provides immediate and clear results instead of traditional manual analysis.',
      technologies: ['Vue.Js', 'Naive UI', 'TypeScript',  'Tailwind CSS', 'MongoDB', 'Node.js', 'Socket.io', 'AWS S3'],
      images: [
        deeper1,
        deeper2,
        deeper3,
        deeper4,
        deeper5,
      ],
      link: 'https://v2-deeper-vision-system.codebase-product.com/',
    },
    {
      id: 3,
      nameAr: 'Nejoum Al-Alam (NALGRP)',
      nameEn: 'Nejoum Al-Alam (NALGRP)',
      descriptionAr: ' Nejoum Al-Alam (NALGRP) موقع تجاري لخدمات استيراد السيارات من المزادات الأمريكية وتسهيل نقلها إلى الموانئ، مع واجهة عرض خدمات واضحة للمستخدمين.',
      descriptionEn: 'Nejoum Al-Alam (NALGRP) is a commercial website for importing cars from American auctions and facilitating their transfer to ports, with a clear service display interface for users.',
      problemAr: 'العملاء كانوا بيواجهوا صعوبة في استيراد سيارات من المزادات الأمريكية وإجراءات الشحن والتخليص بشكل سهل وموثوق.',
      problemEn: 'Customers struggled with importing cars from American auctions and facilitating their transfer to ports, with a clear service display interface for users.',
      solutionAr: ' قمنا ببناء منصة منظمة بتعرض الخدمات بوضوح (استيراد + شحن + دعم) لتسهيل العملية بالكامل وتقديم تجربة مستخدم بسيطة وموثوقة.',
      solutionEn: 'We built a platform that displays services clearly (import + loading + support) to make the process easy and reliable for users.',
      technologies: ['Vue.Js', 'PrimeVue', 'TypeScript', 'Rest API', 'Vuex', 'Tailwind CSS', 'Firebase', 'Laravel', 'MySQL'],
      images: [
        n1,
        n2,
        n3,
      ],
      link: 'https://nalgrp.net/',
    },
    {
      id: 4,
      nameAr: 'Zalameh.app',
      nameEn: 'Zalameh.app',
      descriptionAr: 'Zalameh.app هو موقع/منصة رقمية بتجمع متاجر محلية وعروض منتجات وخدمات في فئات مختلفة (ألبسة، أكل، إلكترونيات، خدمات، إلخ) علشان المستخدم يقدر يتصفح المتاجر بسهولة ويلاقي اللي يحتاجه.',
      descriptionEn: 'Zalameh.app is a digital platform that brings local stores and product and service offers in different categories (clothing, food, electronics, services, etc.) so that the user can easily browse the stores and find what he needs.',
      problemAr: 'العديد من أصحاب المشاريع الصغيرة ماعندهمش مكان مركزي لعرض منتجاتهم وخدماتهم أونلاين بشكل منظم وجذاب.',
      problemEn: 'Many small project owners do not have a central place to display their products and services online in an organized and attractive way.',
      solutionAr: 'قمنا ببناء منصة منظمة لعرض المتاجر وفئات المنتجات بطريقة سهلة للتصفح مع دعوة أصحاب المشاريع للانضمام، مما سهل الوصول للـcustomers وعرض الخدمات بشكل احترافي.',
      solutionEn: 'We built a platform that displays stores and product categories in an organized and attractive way, inviting project owners to join, making it easy for customers to access and display services professionally.',
      technologies: ['Vue.js', 'Python', 'Django', 'Tailwind CSS', 'Firebase', 'Stripe', 'AWS'],
      images: [
        z1,
        z2,
        z3,
        z4,
      ],
      link: 'https://zalameh.app/',
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
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
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
                              className={`h-2 rounded-full transition-all ${(currentImageIndex[project.id] || 0) === imgIndex
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
