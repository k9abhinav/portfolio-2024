import React from 'react';

const Contact = () => {
  return (
    <div
      id="contact"
      className="contact-cont bg-none sm:bg-[url('/person.png')] bg-right-bottom bg-[length:200px_150px] bg-no-repeat md:bg-[length:525px_400px] sm:bg-[length:300px_225px]"
    >
      <div className="contact min-h-screen w-full flex flex-col p-6 md:p-12 lg:p-16 justify-between">
        <footer className="w-full flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 flex flex-col p-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold opacity-60">Let's</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Connect.</h1>
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-10 opacity-60">
              <h1 className="pt-2 md:pt-3 lg:pt-5">
                I'd love to hear from you! <br /> Whether you have a question, a project idea, or just want to say hello, <br /> feel free to get in touch.
              </h1>
              <h1 className="flex gap-2 md:gap-3 lg:gap-5 items-center">
                <i className="fas fa-location-dot"></i> I live in Mangaluru, India.
              </h1>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start gap-2 md:gap-3 lg:gap-5 p-2">
            <h1 className="font-bold text-lg md:text-xl">Looking forward to connecting with you!</h1>
            <a href="https://instagram.com/k9_abhinav" className="flex gap-2 md:gap-3 lg:gap-5 items-center hover:text-red-600">
              <i className="fab fa-instagram"></i>@k9_abhinav
            </a>
            <a href="https://linkedin.com/in/abhinavakrishna" className="flex gap-2 md:gap-3 lg:gap-5 items-center hover:text-red-600">
              <i className="fab fa-linkedin"></i>abhinavakrishna
            </a>
            <a href="https://github.com/k9abhinav" className="flex gap-2 md:gap-3 lg:gap-5 items-center hover:text-red-600">
              <i className="fab fa-github"></i>k9abhinav
            </a>
            <a href="mailto:abhinava03kks@gmail.com" className="flex gap-2 md:gap-3 lg:gap-5 items-center hover:text-red-600">
              <i className="fas fa-envelope"></i>abhinava03kks@gmail.com
            </a>
          </div>
        </footer>
        <footer className="flex flex-col gap-2 md:gap-3 lg:gap-5 mt-6 md:mt-8 lg:mt-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-end gap-1 md:gap-2 leading-none">
            A<span className="font-light">K</span>. PORTFOLIO &copy; 2025.
          </h1>
          <h1 className="text-sm md:text-base lg:text-lg">RUN THE DAY OR THE DAY RUNS YOU - Jim Rohn.</h1>
        </footer>
      </div>
    </div>
  );
};

export default Contact;