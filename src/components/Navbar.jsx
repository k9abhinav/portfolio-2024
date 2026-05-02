import React from 'react';

const Navbar = () => {
  const navigateToProject = () => {
    const screenWidth = window.innerWidth;
    const targetSection = screenWidth >= 768 ? '#project' : '#mob-proj';
    document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar flex flex-col items-center w-full pt-10 px-10 md:px-32">
      <div className="in-nav flex justify-between items-center w-full">
        <a href="/">
          <div className="logo">
            <div className="logo-name text-3xl font-bold flex items-end gap-2 leading-none">
              A<span className="font-light">K</span>.
            </div>
          </div>
        </a>
        <div className="work">
          <div className="work-open">
            <a href="https://www.linkedin.com/in/abhinavakrishna/">
              <div className="open bg-black text-white rounded-lg w-30 h-10 flex items-center px-5 gap-2">
                <div className="dot rounded-full h-[10px] w-[10px] bg-green-500"></div>
                <h1 className="text-xs font-bold">Open to work</h1>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="down-nav mt-4 md:mt-2">
        <ul className="flex gap-10 flex-wrap justify-center md:justify-start">
          <li>
            <a href="#skills" className="hover:text-red-600 hover:font-bold">
              Skills
            </a>
          </li>
          <li>
            <a onClick={navigateToProject} className="hover:text-red-600 hover:font-bold cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-red-600 hover:font-bold">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;