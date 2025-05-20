import React from 'react'

import {useTypewriter,Cursor} from 'react-simple-typewriter'


const About = () => {
    const[typeEffect]=useTypewriter({
        words:['React Developer','Data Analyst','Sql Developer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:60
    })
  return (
    <section
    id="about"
    className="py-4 px-[7vw] md:px-[8vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
       <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Aman Prasad
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a <span className="text-white">{typeEffect}</span> <span className='text-[#8245ec]'><Cursor/></span></span>
          
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I am a passionate and detail-oriented React Developer and Data Analyst with a strong foundation in front-end development and data-driven decision making. With hands-on experience in building responsive web applications using React.js and a solid understanding of SQL and Microsoft Excel, I bring a unique blend of coding expertise and analytical thinking. I am eager to join the IT industry to apply and expand my skills, contribute to innovative projects, and grow as a professional in a dynamic, tech-driven environment.


          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1M6F1nZXeo7pl5FGuysSkJFYGTPMSfROH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>

        <div className="md:w-1/2 px-3 flex justify-center md:justify-end">
         
         <img
           src=""
           alt="Tarun Kaushik"
           className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
         />
      
     </div>
        </div>
    </section>
  )
}

export default About