
import pythonLogo from "../../../src/assets/python.svg"
import djangoLogo from "../../../src/assets/django.svg"
import htmlLogo from "../../../src/assets/html.svg"
import cssLogo from "../../../src/assets/css.svg"
import digoceanLogo from "../../../src/assets/digocean.svg"
import rubyLogo from "../../../src/assets/ruby.svg"
import javaLogo from "../../../src/assets/java.svg"
import junitLogo from "../../../src/assets/junit.svg"
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section 
            id="projects" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>   
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">Optimized Route Planning Application</h3>
                            <p className="text-gray-400 mb-4"> A web app that calculates optimal sightseeing routes using the TSP algorithm, integrating Google Maps API for real-time visualization. Built with Django and Git for efficient backend development and collaboration.</p>
                            <div className="flex gap-4">
                                {/* {["Django", "Python", "HTML/CSS", "Digital Ocean"].map((tech, key) => ( 
                                    <span 
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                    </span>
                                
                                ))} */}
                                <img src={pythonLogo} alt="python logo" className="w-10 hover:-translate-y-1 transition all" />
                                <img src={djangoLogo} alt="django logo" className="w-10 hover:-translate-y-1 transition all" />
                                <img src={htmlLogo} alt="html logo" className="w-10 hover:-translate-y-1 transition all" />
                                <img src={cssLogo} alt="css logo" className="w-10 hover:-translate-y-1 transition all" />
                                <img src={digoceanLogo} alt="digital ocean logo" className="w-10 hover:-translate-y-1 transition all" />
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/cljgregory/local-sights" className="text-green-400 hover:text-green-300 transition-colors my-4"> View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">Ruby Terminal Spreadsheet Application</h3>
                            <p className="text-gray-400 mb-4"> Built a GUI-driven terminal spreadsheet with cell navigation, data input, and formula computation using Ruby and the Curses library. Managed version control with Git.</p>
                            <div className="flex gap-6">
                                {/* {["Django", "Python", "HTML/CSS", "Digital Ocean"].map((tech, key) => ( 
                                    <span 
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                    </span>
                                
                                ))} */}
                                <img src={rubyLogo} alt="Ruby logo" className="w-10 hover:-translate-y-1 transition all" />
                                
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="#" className="text-green-400 hover:text-green-300 transition-colors my-4"> View Project</a>
                            </div>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-2">Java Recipe Application</h3>
                            <p className="text-gray-400 mb-4"> Developed a recipe management app using Java and Scrum methodology. Implemented local saving, collaborated on user stories, and managed version control with Git.</p>
                            <div className="flex gap-4">
                                {/* {["Django", "Python", "HTML/CSS", "Digital Ocean"].map((tech, key) => ( 
                                    <span 
                                        key={key}
                                        className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                                            {tech}
                                    </span>
                                
                                ))} */}
                                <img src={javaLogo} alt="Java logo" className="w-10 hover:-translate-y-1 transition all" />
                                <img src={junitLogo} alt="JUnit5 logo" className="w-10 hover:-translate-y-1 transition all" />
                                
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/cljgregory/recipe-project" className="text-green-400 hover:text-green-300 transition-colors my-4"> View Project</a>
                            </div>
                        </div>

                    </div>

                 
                </div>
            </RevealOnScroll>  
        </section>
    )
}