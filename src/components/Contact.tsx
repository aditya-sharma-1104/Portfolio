import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Github = ({ size = 24 }: { size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
    </svg>
);

const Linkedin = ({ size = 24 }: { size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
    </svg>
);

const Contact = () => {
    return (
        <section id="contact" className="py-32 px-4 md:px-12 max-w-4xl mx-auto relative">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-5xl md:text-7xl font-display text-center mb-16 tracking-wide"
            >
                LET'S TALK
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-[40px] p-8 md:p-16 overflow-hidden flex flex-col items-center text-center group hover:border-white/20 transition-colors duration-500"
            >
                {/* Glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-700"></div>

                <div className="w-24 h-24 md:w-32 md:h-32 bg-[#4A90E2] rounded-full overflow-hidden border-4 border-[#0a0a0a] shadow-2xl mb-8 relative z-10">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kushagra"
                        alt="Aditya Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>

                <h3 className="text-3xl md:text-5xl font-display mb-4 relative z-10">Aditya Sharma</h3>
                <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-12 relative z-10">
                    Product Designer & Full Stack Developer building scalable applications with premium experiences.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                    <a
                        href="mailto:hello@example.com"
                        className="flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:scale-105 hover:bg-gray-200 transition-all duration-300"
                    >
                        <Mail size={20} />
                        Get in touch
                    </a>

                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/40 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/40 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all duration-300">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
