import { motion } from 'framer-motion';

const projects = [
    {
        title: "Smart Health AI",
        category: "AI & Healthcare",
        description: "An intelligent healthcare platform leveraging machine learning to provide predictive diagnostics and personalized patient care plans.",
        stats: [
            { label: "Accuracy", value: "98%" },
            { label: "Patients", value: "10k+" }
        ],
        color: "from-blue-600/20 to-purple-600/20"
    },
    {
        title: "Automobile Loan Application",
        category: "Fin-tech B2C",
        description: "Streamlined auto-loan processing with high completion rates and real-time approval status for Abdul Latif Jameel FINANCE.",
        stats: [
            { label: "Completion", value: "60%" },
            { label: "Projects", value: "5+" }
        ],
        color: "from-purple-600/20 to-pink-600/20"
    }
];

const Projects = () => {
    return (
        <section id="work" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-5xl md:text-7xl font-display text-center mb-24 tracking-wide"
            >
                SELECTED PROJECTS
            </motion.h2>

            <div className="flex flex-col gap-12 md:gap-24">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`group relative overflow-hidden rounded-[40px] bg-gradient-to-br ${project.color} border border-white/5 p-8 md:p-16 flex flex-col lg:flex-row gap-12 hover:border-white/20 transition-all duration-500`}
                    >
                        {/* Content Side */}
                        <div className="flex-1 flex flex-col justify-between z-10">
                            <div>
                                <div className="text-accent text-sm md:text-md uppercase tracking-widest font-semibold mb-4">{project.category}</div>
                                <h3 className="text-4xl md:text-6xl font-display mb-6 leading-none">{project.title}</h3>
                                <p className="text-gray-400 text-lg md:text-xl max-w-md">{project.description}</p>
                            </div>

                            <div className="flex gap-12 mt-12 pt-8 border-t border-white/10">
                                {project.stats.map((stat, sIdx) => (
                                    <div key={sIdx}>
                                        <div className="text-3xl md:text-5xl font-display text-white mb-2">{stat.value}</div>
                                        <div className="text-gray-500 uppercase tracking-widest text-xs md:text-sm">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mockup Side */}
                        <div className="flex-1 relative min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden bg-black/40 border border-white/10 group-hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
