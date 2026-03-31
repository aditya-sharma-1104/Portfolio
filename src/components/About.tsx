import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-32 px-4 text-center max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-gray-300">
                    Hi, I'm <strong className="text-white font-bold">Aditya Sharma</strong> -<br />
                    a <strong className="text-white font-bold">product designer,</strong> currently based in <strong className="text-white font-bold">Delhi.</strong>
                </h2>

                <h2 className="text-3xl md:text-5xl font-light leading-relaxed text-gray-300 mt-20">
                    Food, for me, is <strong className="text-white font-bold">fuel.</strong><br />
                    Not indulgence.<br />
                    I eat for <strong className="text-white font-bold">performance,</strong> not pleasure<br />
                    - though probably more than most <strong className="text-white font-bold">foodies.</strong>
                </h2>

                <motion.div
                    className="mt-20 flex justify-center"
                    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20, delay: 0.3 }}
                >
                    <img
                        src="https://i.imgflip.com/4/83u61s.jpg"
                        alt="Drake Meme"
                        className="w-[280px] md:w-[340px] rounded-3xl shadow-2xl shadow-black/60 hover:rotate-0 hover:scale-105 transition-all duration-500"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
