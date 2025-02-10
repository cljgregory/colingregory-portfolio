import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const languages = ["Python", "Java", "Ruby", "HTML/CSS", "JavaScript", "C"];

    const frameworks = ["React", "Django", "TailwindCSS", "Java Swing", "JUnit 5", "Ruby Curses"]

    return(
        <section 
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent text-center"> About Me</h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6">
                            I'm a recent CS graduate with a passion for creating interesting and innovative solutions. When I'm not coding, you'll find me hiking, exploring the outdoors, or playing guitar :) 
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                                <h3 className="text-xl font-bold mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {languages.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition all">
                                <h3 className="text-xl font-bold mb-4">Frameworks/Libraries</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frameworks.map((tech, key) => (
                                        <span 
                                            key={key}
                                            className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                                {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition all">
                            <h3 className="text-xl font-bold mb-4">Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>
                                    <strong> B.S in Computer Science</strong> - James Madison University (2020 - 2024)
                                </li>
                                <li>
                                    Relevant Coursework: Data Structures/Algorithms, Web Development, Software Engineering 
                                </li>
                                <li>
                                    Clubs: Unix Users Group, JMU Game Dev
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}