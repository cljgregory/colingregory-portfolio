import { useEffect } from "react";
import linkedinLogo from "../../src/assets/linkedin.svg"
import githubLogo from "../../src/assets/github.svg"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex gap-4">
            <a href="#home" className="font-mono text-xl font-bold text-white hover:-translate-y-0.5 transition all">
              colin<span className="text-green-500 "> gregory</span>{" "}
            </a>
            <a href="https://www.linkedin.com/in/cljgreg/" target="_blank">
              <img src={linkedinLogo} alt="" className="h-6.5 hover:-translate-y-0.5 transition all"/>
            </a>

            <a href="https://www.github.com/cljgregory" target="_blank">
              <img src={githubLogo} alt="" className="h-6 hover:-translate-y-0.5 transition all"/>
            </a>
              
          </div>
          

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};