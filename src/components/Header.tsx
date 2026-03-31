import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full px-6 py-4 md:px-16 md:py-6 flex justify-between items-center z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5"
        >
            <a href="#hero" className="text-2xl md:text-3xl font-semibold -tracking-wider border-2 border-white px-3 py-1 pb-1.5 rounded-lg leading-none inline-flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
                ks.
            </a>

            <nav className="flex gap-6 md:gap-10">
                <a href="#hero" className="text-white font-semibold text-sm md:text-base tracking-wide hover:text-accent transition-all hover:-translate-y-0.5 duration-300">Resume</a>
                <a href="#work" className="text-white font-semibold text-sm md:text-base tracking-wide hover:text-accent transition-all hover:-translate-y-0.5 duration-300">Projects</a>
                <a href="#about" className="text-white font-semibold text-sm md:text-base tracking-wide hover:text-accent transition-all hover:-translate-y-0.5 duration-300">About Me</a>
                <a href="#contact" className="text-white font-semibold text-sm md:text-base tracking-wide hover:text-accent transition-all hover:-translate-y-0.5 duration-300">Contact</a>
            </nav>
        </motion.header>
    );
};

export default Header;
