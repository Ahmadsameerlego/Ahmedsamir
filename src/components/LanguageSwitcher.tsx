import { Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface LanguageSwitcherProps {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
}

export function LanguageSwitcher({ language, setLanguage }: LanguageSwitcherProps) {
  return (
    <motion.div
      className="fixed top-8 left-8 z-50 rtl:left-auto rtl:right-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button
        onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 backdrop-blur-md text-white rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-semibold">{language === 'ar' ? 'EN' : 'عربي'}</span>
      </motion.button>
    </motion.div>
  );
}