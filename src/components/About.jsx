import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Animate "one"
    gsap.from('.about .center-about .one', {
      opacity: 0,
      x: -1000,
      scrollTrigger: {
        trigger: '.about .center-about .one',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 20%',
        scrub: 2,
      },
    });

    // Animate "two"
    gsap.from('.about .center-about .two', {
      opacity: 0,
      x: 1000,
      scrollTrigger: {
        trigger: '.about .center-about .two',
        scroller: 'body',
        start: 'top 110%',
        end: 'top 50%',
        scrub: 2,
      },
    });

    // Animate below-about
    gsap.from('.about .below-about', {
      opacity: 0,
      y: -300,
      scrollTrigger: {
        trigger: '.about .below-about',
        scroller: 'body',
        start: 'top 100%',
        end: 'top 20%',
        scrub: 2,
      },
    });
  }, []);

  return (
    <div>
      <div className="about flex flex-col w-full h-[150vh] md:h-[130vh] bg-[#f8f7f4] bg-no-repeat bg-cover text-[#0d1117] gap-10 overflow-hidden hidden md:block">
        <div className="top-about flex w-full justify-start px-10 pt-20">
          <div>
            <h1 className="text-xl">
              I'm a enthusiastic Developer with a knack for crafting elegant, user-friendly web applications.
            </h1>
            <h1 className="text-xl">
              I enjoy bringing ideas to life using the latest technologies and best practices.
            </h1>
          </div>
        </div>
        <div className="center-about flex w-full justify-center p-10">
          <div className="flex flex-col items-center justify-center text-8xl uppercase">
            <h1 className="one">Enthusiastic</h1>
            <h1 className="leading-normal">Web</h1>
            <h1 className="two">Developer</h1>
          </div>
        </div>
        <div className="below-about flex w-full justify-end p-10">
          <div className="text-xl justify-end">
            <h1>
              I'm always eager to collaborate on innovative projects and explore challenging problem-solving opportunities.
            </h1>
            <h1>
              If you're looking for a dedicated developer who thrives in dynamic environments, let's connect and create something impactful.
            </h1>
          </div>
        </div>
        <h1 className="text-6xl pl-24 pt-16 text-[#0d1117] font-bold">My Projects</h1>
      </div>
    </div>
  );
};

export default About;
