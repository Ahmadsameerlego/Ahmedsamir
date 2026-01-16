import { Mail, Phone, Linkedin, Github, MessageCircle, Send, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactProps {
  language: 'ar' | 'en';
}

export function Contact({ language }: ContactProps) {
  const content = {
    ar: {
      title: 'تواصل معي',
      subtitle: 'جاهز لبناء شيء رائع معاً؟ لا تتردد في التواصل',
      phone: 'هاتف وواتساب',
      email: 'البريد الإلكتروني',
      linkedin: 'لينكد إن',
      github: 'جيت هاب',
      location: 'الموقع',
      locationValue: 'مصر',
      cta: 'دعنا نبدأ مشروعك',
      ctaSubtitle: 'أنا متاح للمشاريع الجديدة والفرص المثيرة',
      footer: 'صُنع بشغف في مصر 🇪🇬',
      whatsapp: 'واتساب',
    },
    en: {
      title: 'Let\'s Connect',
      subtitle: 'Ready to build something great together? Feel free to reach out',
      phone: 'Phone & WhatsApp',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      location: 'Location',
      locationValue: 'Egypt',
      cta: 'Let\'s Start Your Project',
      ctaSubtitle: 'I\'m available for new projects and exciting opportunities',
      footer: 'Made with passion in Egypt 🇪🇬',
      whatsapp: 'WhatsApp',
    },
  };

  const t = content[language];

  const contactMethods = [
    {
      icon: Phone,
      label: t.phone,
      value: '01013746111',
      href: 'tel:+201013746111',
      action: 'https://wa.me/201013746111',
      actionIcon: MessageCircle,
      actionLabel: t.whatsapp,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      label: t.email,
      value: 'ahmadsamerlego@gmail.com',
      href: 'mailto:ahmadsamerlego@gmail.com',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      icon: Linkedin,
      label: t.linkedin,
      value: 'Ahmed Samir',
      href: 'https://www.linkedin.com/in/ahmed-sameer-5b9653228/',
      gradient: 'from-blue-600 to-blue-500',
    },
    {
      icon: Github,
      label: t.github,
      value: 'Ahmadsameerlego',
      href: 'https://github.com/Ahmadsameerlego',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Send className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">{t.subtitle}</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl mb-6 font-bold">
            {t.title}
          </h2>
          
          <motion.div
            className="h-1.5 w-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const ActionIcon = method.actionIcon;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative p-8 bg-white rounded-3xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl"
                >
                  {/* Gradient Border on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-start gap-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-500 mb-2 font-semibold">{method.label}</p>
                      <p className="text-xl md:text-2xl text-gray-900 break-all font-semibold">
                        {method.value}
                      </p>
                    </div>

                    {ActionIcon && (
                      <motion.a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`w-12 h-12 bg-gradient-to-br ${method.gradient} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ActionIcon className="w-6 h-6 text-white" />
                      </motion.a>
                    )}
                  </div>

                  {/* Corner Decoration */}
                  <div className={`absolute bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-20 h-20 bg-gradient-to-tl ${method.gradient} opacity-5 rounded-tl-3xl`} />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Location Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative p-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl shadow-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="relative z-10 flex items-center gap-6 justify-center">
              <motion.div
                className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-white">
                <p className="text-sm opacity-90 mb-1">{t.location}</p>
                <p className="text-3xl font-bold">{t.locationValue}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative text-center py-20 px-8 bg-gradient-to-br from-black via-gray-900 to-black text-white rounded-3xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <Send className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            </motion.div>
            
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              {t.cta}
            </h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              {t.ctaSubtitle}
            </p>
            
            <motion.a
              href="mailto:ahmadsamerlego@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6" />
              <span>{t.email}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-gray-600 text-lg"
            whileHover={{ scale: 1.05 }}
          >
            © 2026 Ahmed Samir · {t.footer}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
