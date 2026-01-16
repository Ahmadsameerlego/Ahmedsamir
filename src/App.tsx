import { useState } from "react";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { LanguageSwitcher } from "./components/LanguageSwitcher";

export default function App() {
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  return (
    <div
      className={`min-h-screen ${language === "ar" ? "rtl" : "ltr"}`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <LanguageSwitcher
        language={language}
        setLanguage={setLanguage}
      />
      <Hero language={language} />
      <Projects language={language} />
      <Experience language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
}