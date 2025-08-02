"use client";

import { experienceData } from '../data/experienceData';
import { ExperienceItem } from '../components/experienceItem';
import { projectData } from '../data/projectData';
import { ProjectItem } from '../components/projectItem';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px',  // top margin smaller, bottom margin larger
        threshold: 0.6, }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden font-sans">

      {/* Split layout */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Left fixed panel */}
        <aside className="w-full md:w-1/3 bg-gray-800 text-white px-6 py-2 md:pl-20 md:p-10 space-y-5 overflow-visible text-center md:text-left">
          <div>
            <h1 className="pb-5 text-3xl font-bold text-orange-400">Kevin Gutierrez</h1>
            <p className="pb-0.5 text-sm">Columbia University Class of 2026</p>
            <p className="pb-0.5 text-sm">Computer Science</p>
            <p className="pb-0.5 text-sm">New York, NY</p>
            <a
              href="mailto:kmg2226@columbia.edu"
              className="pb-0.5 text-sm text-orange-400 hover:underline transition inline-block"
            >
              kmg2226@columbia.edu
            </a>
          </div>
          <div className="mt-4 flex items-center justify-center md:justify-start gap-4">
            <a
              href="/images/Gutierrez,Kevin.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-400 cursor-pointer px-4 py-2 border border-white rounded hover:bg-orange-600 duration-700 transition"
            >
              Resume
            </a>

            <a
              href="https://github.com/kevingutierrez04"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center shadow-sm text-orange-400 hover:text-orange-600 transition"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-gutierrez-garcia/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[40px] h-[40px] flex items-center justify-center shadow-sm text-orange-400 hover:text-orange-600 transition"
            >
              <FaLinkedin size={30} />
            </a>
          </div>

          
          <nav className="hidden md:flex flex-col mt-10 gap-2 text-white text-sm font-medium">
    {["about", "experience", "projects", "honors"].map((id) => (
      <button
        key={id}
        onClick={() => {
          const section = document.getElementById(id);
          if (section && mainRef.current) {
            mainRef.current.scrollTo({
              top: section.offsetTop,
              behavior: "smooth",
            });
          }
        }}
        className={`text-left max-w-[96px] rounded px-3 py-1 transition duration-700 cursor-pointer hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
          activeSection === id ? "border-2 border-orange-400" : ""
        }`}
        aria-current={activeSection === id ? "true" : undefined}
      >
        {id.charAt(0).toUpperCase() + id.slice(1)}
      </button>
    ))}
  </nav>
</aside>

        {/* Right panel */}
        <main ref = {mainRef} className="bg-gray-800 w-full md:w-2/3 h-full overflow-y-scroll md:p-10 p-6 space-y-5 text-white">
          <section id="about">
            <h2 className="text-orange-400 text-center text-2xl font-bold pb-5 mb-2">About</h2>
            <div className="space-y-3">
              <p>
              I’m a senior at Columbia University studying Computer Science with a minor in Economics. 
              I have tangential interests in business, marketing, and startups.
              </p>
              <p>
              This summer, I interned as a Software Development Engineer at Amazon Web Services on the
              AI Platforms team. In my time, I designed and implemented the infrastructure for a log
              sharing service to be used by SageMaker AI Partner Apps. Before my internship, ML modeling
              and Governance vendors such as Deepchecks, Fiddler, and Lakera Guard had no automated method to
              independently debug customer production workloads.
              </p>
              <p>
              In my free time, I’m usually running, reading, or climbing. I’ve also been an avid skier my whole life.
              </p>
            </div>
          </section>

          <section id="experience">
            <h2 className="pb-5 text-orange-400 text-center text-2xl font-bold mb-2">Experience</h2>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <ExperienceItem key={index} {...item} />
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="pb-5 text-orange-400 text-center text-2xl font-bold mb-2">Selected Projects</h2>
            <div className="space-y-6">
              {projectData.map((item, index) => (
                <ProjectItem key={index} {...item} />
              ))}
            </div>
          </section>

          <section id="honors">
  <h2 className=" pb-5 text-orange-400 text-center text-2xl font-bold mb-2">
    Honors
  </h2>
  <p className="text-white mb-4">
    The Gates Scholarship
  </p>
  <ul className="list-disc list-inside text-white">
    <li>Selected as 1 of 300 scholars from a pool of over 37,000 applicants, the scholarship awards
      with me a four-year scholarship of my full cost of attendance. In recognition for an outstanding
      academic record, demonstrated leadership ability, and exceptional personal success skills,
      the Gates Scholarship will provide the financial aid, mentorship, and resources to allow me to
      reach my full potential.</li>
  </ul>
</section>

        </main>
      </div>
    </div>
  );
}
