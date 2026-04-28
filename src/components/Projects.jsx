import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      title: 'SHOWS NOW',
      description:
        'A user-friendly application for browsing, selecting, and purchasing movie tickets with real-time seat availability and secure payment integration.',
      link: 'https://showsnow.onrender.com/',
      bgImage: '/login-background.jpg',
      bgColor: 'bg-slate-0',
    },
    {
      title: 'PICTOFY',
      description:
        'Pictofy allows users to create collections of images, follow interests, and explore diverse topics through a visually engaging interface.',
      link: 'https://pintclone.onrender.com',
      bgColor: 'bg-red-100',
    },
    {
      title: 'FLEETO',
      description:
        'A streamlined car rental application enabling users to easily browse, book, and manage car rentals with real-time vehicle availability and secure payment processing.',
      link: 'https://pintclone.onrender.com/',
      bgImage: '/car.png',
      bgColor: 'bg-red-100',
    },
    {
      title: 'RESULT EXTRACTOR',
      description:
        'Developed an automated result extractor using Selenium and ChromeDriver to fetch student results from a website, with Tesseract and OpenCV for captcha processing.',
      link: 'https://github.com/24Lavanya/RESULT-EXTRACTION',
      bgImage: '/Mini_Proj.png',
    },
  ];

  useEffect(() => {
    gsap.to('.slide', {
      scrollTrigger: {
        trigger: '.projects-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2,
      },
      xPercent: -300,
      ease: 'power4.inOut',
    });
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div
        id="project"
        className="projects-container hidden md:block w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1714279239071-bddde20e797b?q=80&w=1887&auto=format&fit=crop')`,
        }}
      >
        <div className="inprojects h-[400vh] relative">
          <div className="proj-slides overflow-hidden w-full h-[100vh] flex sticky top-0 left-0">
            {projects.map((project, index) => (
              <div
                key={index}
                className="slide flex items-center flex-col justify-center w-full h-screen flex-shrink-0 bg-cover bg-center text-black"
                style={{
                  backgroundImage: project.bgImage ? `url('${project.bgImage}')` : 'none',
                }}
              >
                <div className="project flex items-center justify-center w-full pl-24 pt-5">
                  <div className={`${project.bgColor} w-[35%] p-3 rounded-lg`}>
                    <h1 className="text-4xl font-bold p-2">{project.title}</h1>
                    <h1 className="p-2">{project.description}</h1>
                    <a href={project.link}>
                      <button className="rounded pl-[2vw] pr-[2vw] pt-[2.5vh] pb-[2.5vh] bg-red-400 font-bold text-white hover:bg-red-500 transition-colors">
                        Visit Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div id="mob-proj" className="projects-container block md:hidden w-full bg-gray-900 text-white">
        <div className="inprojects h-auto relative py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-xl text-center pb-5 text-green-400 font-black">MY PROJECTS</h1>
          <div className="project-grid grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="project-content">
                  <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <a href={project.link}>
                    <button className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
                      Visit Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
