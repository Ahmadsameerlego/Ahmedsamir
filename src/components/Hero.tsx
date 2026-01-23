import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import portfolio from '../assets/portfolio.jpeg'

interface HeroProps {
  language: 'ar' | 'en';
}

export function Hero({ language }: HeroProps) {
  const content = {
    ar: {
      greeting: 'أهلاً، أنا',
      name: 'أحمد سمير',
      title: 'مهندس برمجيات',
      experience: '5 سنوات من الخبرة',
      headline: 'أحول الأفكار إلى منتجات رقمية قوية وقابلة للتطوير',
      description: 'متخصص في بناء حلول برمجية عالية الجودة للشركات الناشئة والوكالات والعملاء الدوليين. أركز على كتابة كود نظيف وقابل للصيانة مع تجربة مستخدم استثنائية.',
      cta: 'لنعمل معاً',
      scroll: 'استكشف الأعمال',
    },
    en: {
      greeting: 'Hi, I am',
      name: 'Ahmed Samir',
      title: 'Software Engineer',
      experience: '5 Years of Experience',
      headline: 'I transform ideas into powerful, scalable digital products',
      description: 'Specialized in building high-quality software solutions for startups, agencies, and international clients. I focus on writing clean, maintainable code with exceptional user experience.',
      cta: 'Let\'s Work Together',
      scroll: 'Explore Work',
    },
  };

  const t = content[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1640963269654-3fe248c5fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3Njg1MzAyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">{t.greeting}</span>
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {t.name}
              </motion.h1>
              
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl text-purple-400">
                  {t.title}
                </h2>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm md:text-base rounded-full font-bold">
                  {t.experience}
                </span>
              </motion.div>
            </div>

            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {t.headline}
            </motion.p>

            <motion.p
              className="text-base md:text-lg text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span>{t.cta}</span>
                  {language === 'ar' ? (
                    <ArrowLeft className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg rounded-full border border-white/20 hover:bg-white/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.scroll}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50"
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <img
                src={portfolio}
                alt="Technology"
                className="relative rounded-3xl w-full h-[500px] object-contain border border-white/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
