import React from "react";

const Experience = () => {

  const experiences = [
    {
      role: "Scilab Intern",
      company: "IIT Bombay",
      duration: "1 Month",
      description:
        "Completed an internship focused on Scilab-based computational tools, programming concepts, and technical development workflows.",
      skills: [
        "Scilab",
        "Programming",
        "Open Source",
        "Technical Development"
      ]
    },

    {
      role: "Student Research Internship Program (SRIP)",
      company: "VIT Chennai",
      duration: "2 Months",
      description:
        "Developed an Automated Authenticity Verification System under faculty guidance as part of the SRIP program. The project focused on applying AI-based techniques for analyzing and verifying the authenticity of historical inscriptions and digital content.",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Research",
        "Python",
        "Software Engineering"
      ]
    }

  ];


  return (

    <section
      id="experience"
      className="
      bg-[#080808]
      py-24
      px-6
      md:px-12
      text-white
      "
    >

      <div className="max-w-6xl mx-auto">


        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          mb-16
          "
        >

          Experience

        </h2>



        <div className="space-y-10">


        {experiences.map((exp,index)=>(


          <div
            key={index}
            className="
            border
            border-purple-500/30
            rounded-3xl
            p-8
            bg-white/5
            backdrop-blur
            hover:border-purple-400
            transition
            "
          >


            <div
              className="
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-4
              "
            >


              <div>

                <h3
                  className="
                  text-3xl
                  font-black
                  text-purple-400
                  "
                >

                  {exp.role}

                </h3>


                <p className="text-xl font-bold mt-2">

                  {exp.company}

                </p>


              </div>



              <span
                className="
                text-purple-200
                font-semibold
                "
              >

                {exp.duration}

              </span>


            </div>



            <p
              className="
              mt-6
              text-gray-300
              leading-relaxed
              max-w-3xl
              "
            >

              {exp.description}

            </p>



            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-6
              "
            >

              {exp.skills.map(skill=>(

                <span
                  key={skill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-purple-600/20
                  border
                  border-purple-400/30
                  text-sm
                  "
                >

                  {skill}

                </span>

              ))}


            </div>



          </div>


        ))}


        </div>


      </div>


    </section>

  );

};


export default Experience;