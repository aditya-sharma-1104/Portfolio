import { motion } from 'framer-motion';

const technologies = [
    "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js",
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Python",
    "TensorFlow", "OpenAI API", "AWS", "Java", "C", "C++"
];

const TechLoop = () => {
    return (
        <section className="py-20 overflow-hidden bg-[#0a0a0a] border-y border-white/5 relative flex items-center">
            {/* Left and Right Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Adjust speed here
                }}
            >
                {/* Double the array for seamless infinite scroll */}
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={index}
                        className="mx-8 text-2xl md:text-4xl font-display text-white/20 hover:text-accent transition-colors duration-300 cursor-default uppercase tracking-wider"
                    >
                        {tech}
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default TechLoop;
