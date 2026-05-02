import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: 'https://img.icons8.com/color/96/000000/html-5.png' },
    { name: 'CSS3', icon: 'https://img.icons8.com/color/96/000000/css3.png' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/color/96/000000/javascript.png' },
    { name: 'Java', icon: 'https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png' },
    { name: 'C', icon: 'https://img.icons8.com/color/96/000000/c-programming.png' },
    { name: 'Python', icon: 'https://img.icons8.com/color/96/000000/python.png' },
    { name: 'SQL', icon: 'https://img.icons8.com/color/96/000000/sql.png' },
    { name: 'Git', icon: 'https://img.icons8.com/color/96/000000/git.png' },
    { name: 'GitHub', icon: 'https://img.icons8.com/ios-filled/50/000000/github.png' },
    { name: 'NodeJS', icon: 'https://img.icons8.com/color/96/000000/nodejs.png' },
    { name: 'ReactJS', icon: 'https://img.icons8.com/color/96/000000/react-native.png' },
    { name: 'ExpressJS', icon: 'https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000' },
    { name: 'MongoDB', icon: 'https://img.icons8.com/color/96/000000/mongodb.png' },
    { name: 'GSAP', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vteG2DudlxILcIB8idhgX49HFuCk4_nEtQ&s' },
    { name: 'TailwindCSS', icon: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000' },
  ];

  useEffect(() => {
    gsap.from('.all-skills div', {
      scrollTrigger: {
        trigger: '.all-skills',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      },
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }, []);

  return (
    <div
      id="skills"
      className="skills-container text-white bg-[url('/skill.png')] bg-cover bg-no-repeat flex items-center justify-center min-h-screen"
    >
      <div className="text-center pb-14">
        <h1 className="text-[9vh] pt-10 mb-12">My Skills</h1>
        <div className="all-skills grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full max-w-4xl mx-auto mb-[5vh]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white shadow rounded hover:shadow-lg transition-shadow"
            >
              <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;