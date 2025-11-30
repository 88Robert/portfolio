import { Navbar } from "./components/Navbar/Navbar";
import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { TranslationProvider } from "./contexts/TranslationContext";

function App() {
  return (
    <TranslationProvider>
      <div className={styles.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </TranslationProvider>
  );
}

export default App;
