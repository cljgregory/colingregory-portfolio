import { RevealOnScroll } from "../RevealOnScroll";
export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-700 bg-clip-text text-transparent leading-right">
                        Hi, I'm Colin Gregory
                    </h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a software & web developer from Harrisonburg, VA, <br />
                        passionate about efficiency and digital experiences.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <a href="#projects" className="bg-green-700 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(200,200,200,0.4)]">View Projects</a>
                        <a href="#contact" className="border vorder-green-500/50 text-green-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(200,200,200,0.2)] hover:bg-green-700/20">Contact Me</a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};