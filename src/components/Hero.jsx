import React from 'react';

const Hero = () => {
  return (
    <div className="home w-full min-h-[85vh] flex flex-col items-center relative md:flex-row">
      <div className="left-home w-full md:w-1/2 py-20 px-8 md:px-16 flex flex-col items-center justify-center relative overflow-hidden">
        <h2 className="text-[4vw] md:text-[3vw] lg:text-[2.5vw] font-bold flex items-center gap-4 text-center md:text-left">
          I'm
          <div className="h-[6vh] w-[18vw] md:h-[8vh] md:w-[23vw] lg:h-[10vh] lg:w-[25vw] rounded-full bg-[url('/demon.jpg')] bg-cover bg-center"></div>
        </h2>
        <h1 className="text-[9vw] md:text-[6vw] lg:text-[4vw] font-bold text-center md:text-left">
          Abhinava <span className="opacity-60">Krishna.</span>
        </h1>
        <h3 className="font-regular text-[4vw] md:text-[3vw] lg:text-[2vw] tracking-wide text-center md:text-left opacity-60">
          Full-Stack Web Developer.
        </h3>

        <div className="resume border-2-red p-2">
          <a href="">
            <button className="flex items-center px-5 py-2 rounded-lg hover:bg-red-500 bg-[#0D1117] font-bold text-sm transition-all transform active:scale-95 text-white">
              <span>My Resume</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
                className="ml-2 transition-transform ease-in-out hover:translate-x-1"
              >
                <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                <path
                  fill="white"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5H48V35.5H25V38.5Z"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div className="right-home w-full md:w-1/2 flex items-center justify-center scale-[1.1]">
        <img src="/footer.png" alt="portfolio" className="max-w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;