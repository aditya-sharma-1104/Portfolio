import { motion, Variants } from 'framer-motion';

const skillCategories = [
    {
        title: "MERN Stack",
        skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "Tailwind CSS"]
    },
    {
        title: "AI & Tools",
        skills: ["Python", "TensorFlow", "OpenAI API", "Langchain", "Hugging Face"]
    },
    {
        title: "Cloud & APIs",
        skills: ["AWS", "Docker", "RESTful APIs", "GraphQL", "PostgreSQL", "Firebase"]
    }
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 24 } }
};

const Skills = () => {
    return (
        <section id="skills" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-5xl md:text-7xl font-display text-center mb-24 tracking-wide"
            >
                SKILLS & TECH
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
                    >
                        <h3 className="text-2xl font-display mb-8 text-accent tracking-wider">{category.title}</h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-wrap gap-4"
                        >
                            {category.skills.map((skill, sIdx) => (
                                <motion.span
                                    variants={itemVariants}
                                    key={sIdx}
                                    className="px-4 py-2 bg-black/40 border border-white/10 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
