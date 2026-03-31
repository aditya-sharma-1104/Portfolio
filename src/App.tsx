import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechLoop from './components/TechLoop';
import Books from './components/Books';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-[#0a0a0a] min-h-screen font-sans text-white">
            <div className="moving-grid-bg"></div>
            <Header />
            <main>
                <Hero />
                <TechLoop />
                <Philosophy />
                <Projects />
                <Skills />
                <Books />
                <About />
                <Contact />
            </main>
        </div>
    );
}

export default App;
