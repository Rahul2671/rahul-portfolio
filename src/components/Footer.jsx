import React from 'react';

const Footer = () => {

  return (

    <footer
      className="
      bg-[#080808]
      text-white
      py-16
      px-6
      md:px-12
      w-full
      font-sans
      min-h-[45vh]
      flex
      flex-col
      justify-between
      "
    >


      {/* Top Row */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-10
        w-full
        "
      >


        <div>

          <p className="text-purple-400 font-bold uppercase tracking-widest text-sm">
            AI Engineer
          </p>

          <p className="text-white/60 mt-2">
            Full Stack Developer
          </p>

          <p className="text-white/60">
            Generative AI Developer
          </p>

        </div>



        <div className="md:text-center">

          <p className="text-white/80">
            Computer Science Engineering Student
          </p>

          <p className="text-white/50 mt-2">
            VIT Chennai
          </p>

        </div>



        <div className="md:text-right">

          <p className="text-white/80">
            Open to opportunities
          </p>

          <p className="text-white/50">
            {new Date().getFullYear()}
          </p>

        </div>


      </div>





      {/* Big Name */}

      <div
        className="
        w-full
        flex
        justify-center
        items-center
        py-20
        overflow-hidden
        "
      >

        <h2
          className="
          text-[22vw]
          leading-none
          font-black
          tracking-tighter
          text-white
          "
        >

          Rahul

        </h2>


      </div>





      {/* Bottom */}

      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-8
        items-end
        "
      >


        <div>

          <a
            href="#contact"
            className="
            underline
            hover:text-purple-400
            transition
            "
          >

            Contact

          </a>


          <p className="text-white/40 text-xs mt-4">

            © {new Date().getFullYear()} Rahul R | Built with React

          </p>


        </div>




        <div className="md:text-center">

          <a
            href="mailto:rahulsubha1983@gmail.com"
            className="hover:text-purple-400 transition"
          >

            rahulsubha1983@gmail.com

          </a>


        </div>




        <div className="md:text-right flex gap-5 md:justify-end">


          <a
            href="https://github.com/Rahul2671"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>



          <a
            href="https://www.linkedin.com/in/rahul-r-9886a232a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>


        </div>


      </div>


    </footer>

  );

};


export default Footer;