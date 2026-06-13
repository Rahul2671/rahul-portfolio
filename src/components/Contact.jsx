import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-20 border-t border-gray-900"
    >

      {/* Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none z-0 pt-16"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter opacity-90 select-none"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Connect
        </h1>
      </motion.div>


      {/* Contact Card */}
      <div className="relative z-10 w-full flex justify-center px-6">

        <div
          data-aos="fade-up"
          className="bg-[#6D28D9] w-full max-w-5xl rounded-3xl p-10 md:p-16 text-white shadow-2xl"
        >

          <div className="mb-12">

            <p className="text-sm tracking-[0.3em] uppercase font-bold text-purple-200 mb-4">
              Get In Touch
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Let's Build Something Great
            </h2>

            <p className="mt-6 text-lg text-purple-100 max-w-2xl">
              Interested in AI, full-stack development, research projects,
              or innovative software solutions? Feel free to connect with me.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">


            {/* Email */}
            <a
              href="mailto:rahulsubha1983@gmail.com"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition"
            >

              <h3 className="text-xl font-bold mb-2">
                Email
              </h3>

              <p className="text-purple-100 text-sm break-all">
                rahulsubha1983@gmail.com
              </p>

            </a>



            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rahul-r-9886a232a"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition"
            >

              <h3 className="text-xl font-bold mb-2">
                LinkedIn
              </h3>

              <p className="text-purple-100">
                Rahul R
              </p>

            </a>



            {/* GitHub */}
            <a
              href="https://github.com/Rahul2671"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition"
            >

              <h3 className="text-xl font-bold mb-2">
                GitHub
              </h3>

              <p className="text-purple-100">
                Rahul2671
              </p>

            </a>


          </div>


          <div className="mt-12">

            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white text-purple-700 font-bold hover:scale-105 transition"
            >

              View My Projects

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />

              </svg>

            </a>

          </div>


        </div>

      </div>


    </section>
  );
};

export default Contact;