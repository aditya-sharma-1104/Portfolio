import { motion } from 'framer-motion';
import ProfileCard from './ProfileCard';
import avatarImg from './imgs/download.jpg';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20 px-4">
            <div className="relative flex justify-center items-center w-full h-[500px] md:h-[600px]">
                {/* Background Text */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[110%] text-[8rem] sm:text-[10rem] md:text-[14rem] font-display text-white/5 z-0 whitespace-nowrap leading-none"
                >
                    HI! I'M
                </motion.div>

                {/* Profile Card Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
                    className="relative z-10"
                >
                    <ProfileCard
                        name="Aditya Sharma"
                        title="Product Designer"
                        handle="adityasharma"
                        status="Available for hire"
                        contactText="Let's Chat"
                        avatarUrl={avatarImg}
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={true}
                        behindGlowColor="rgba(74, 144, 226, 0.6)"
                        behindGlowEnabled={true}
                    />
                </motion.div>

                {/* Foreground Text */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%] text-[9rem] sm:text-[12rem] md:text-[15rem] font-display text-white z-20 whitespace-nowrap leading-none pointer-events-none"
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
