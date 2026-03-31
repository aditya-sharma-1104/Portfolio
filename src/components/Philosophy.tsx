import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-40 px-4 text-center max-w-5xl mx-auto flex flex-col justify-center items-center min-h-[80vh]">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-normal leading-tight md:leading-snug tracking-wide"
            >
                I don't start with screens.<br />
                I start with seeing -<br />
                <span className="font-semibold text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}>seeing hesitation,</span><br />
                <span className="font-semibold text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}>seeing intent,</span><br />
                <span className="font-semibold text-transparent" style={{ WebkitTextStroke: '1px rgba(255, 255, 255, 0.6)' }}>seeing what remains unsaid.</span><br />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    Design emerges there,<br />
                    <span className="font-cursive text-5xl md:text-[6.5rem] text-accent inline-block mt-4 translate-y-2">where awareness meets action</span>
                </motion.div>
            </motion.h2>
        </section>
    );
};

export default Philosophy;
