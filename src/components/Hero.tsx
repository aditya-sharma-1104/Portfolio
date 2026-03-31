import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20 px-4">
            <div className="relative flex justify-center items-center w-full h-[400px] md:h-[450px]">
                {/* Background Text */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[85%] text-[8rem] sm:text-[10rem] md:text-[14rem] font-display text-white/5 z-0 whitespace-nowrap leading-none"
                >
                    HI! I'M
                </motion.div>

                {/* Avatar Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    className="relative z-10 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] bg-[#4A90E2] rounded-[50px] md:rounded-[90px] overflow-hidden shadow-2xl shadow-black/50 md:-translate-y-5"
                >
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kushagra"
                        alt="Aditya Avatar"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Foreground Text */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45%] text-[9rem] sm:text-[12rem] md:text-[15rem] font-display text-white z-20 whitespace-nowrap leading-none"
                    style={{ textShadow: '0 20px 50px rgba(0,0,0,0.8)' }}
                >
                    ADITYA
                </motion.div>
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-lg md:text-xl font-light text-gray-400 mt-24 md:mt-32 z-30 max-w-lg"
            >
                A product designer who plays tennis and studies philosophy
            </motion.p>
        </section>
    );
};

export default Hero;
