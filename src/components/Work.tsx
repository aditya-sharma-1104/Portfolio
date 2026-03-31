import './Work.css';

const Work = () => {
    return (
        <section id="work" className="work-section section-container">
            <h2 className="section-title">Work</h2>

            <div className="projects-grid">
                <div className="project-card purple-card">
                    <div className="card-content">
                        <div className="company-logo">Abdul Latif Jameel FINANCE</div>
                        <h3 className="project-title">An Automobile Loan Application</h3>

                        <div className="tags">
                            <span className="tag">Mobile & Web Application</span>
                            <span className="tag">B2C & B2B</span>
                            <span className="tag">Fin-tech</span>
                        </div>

                        <div className="stats">
                            <div className="stat">
                                <h4>5+</h4>
                                <p>ALJF projects bagged across sectors</p>
                            </div>
                            <div className="stat">
                                <h4>60%</h4>
                                <p>Users who started the auto loan process completed their application</p>
                            </div>
                        </div>
                    </div>

                    <div className="card-mockups">
                        {/* Minimalist representations of the devices */}
                        <div className="mockup mockup-main">
                            <div className="mockup-header"></div>
                            <div className="mockup-img"></div>
                            <div className="mockup-grid">
                                <div></div><div></div><div></div><div></div>
                            </div>
                        </div>
                        <div className="mockup mockup-side mockup-top"></div>
                        <div className="mockup mockup-side mockup-bottom"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Work;
