import React from "react";

const Experience = () => {

  const experiences = [
    {
      role: "Scilab Intern",
      company: "IIT Bombay",
      duration: "1 Month",
      description:
        "Completed an internship focused on Scilab-based computational tools, hyperparameter optimization, programming concepts, and technical development workflows.",
      proofLink: "https://scilab.in/case-study-project/completed-case-studies",
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
    },

    {
      role: "Treasurer",
      company: "ACM Student Chapter",
      duration: "Oct 2025 – Present",
      description:
        "Managed financial operations for chapter events, coordinated reimbursements and budgeting, and organized documentation and event reports. Worked closely with faculty coordinators and student teams, contributing towards the chapter receiving the Best Chapter Award through operational excellence and event management.",
      skills: [
        "Financial Management",
        "Event Coordination",
        "Leadership",
        "Documentation",
        "Team Collaboration"
      ]
    },

    {
      role: "Incoming Co-Chair",
      company: "ACM Student Chapter",
      duration: "2026 – Present",
      description:
        "Appointed as the Incoming Co-Chair after serving as Treasurer, recognizing my contributions to chapter operations, financial management, event coordination, and leadership. Responsible for leading strategic planning, mentoring student teams, coordinating flagship events, and driving chapter growth in the upcoming tenure.",
      skills: [
        "Leadership",
        "Strategic Planning",
        "Team Management",
        "Event Management",
        "Mentoring",
        "Community Building"
      ]
    }

  ];

  const achievements = [
    {
      title: "Best Chapter Award",
      detail: "Contributed to the ACM Student Chapter receiving the Best Chapter Award through operational excellence."
    },
    {
      title: "SRIP AI Internship",
      detail: "Completed the Summer Research Internship Programme focused on AI-based authenticity verification research."
    },
    {
      title: "IIT Bombay Scilab Internship",
      detail: "Completed open-source internship at IIT Bombay working on hyperparameter optimization in the FOSSEE Toolbox."
    }
  ];

  const certificationGroups = [
    {
      category: "Internship & Research",
      items: [
        "SRIP — Summer Research Internship Programme (2025)",
        "FOSSEE Internship — IIT Bombay (2025)"
      ]
    },
    {
      category: "Technical",
      items: [
        "MongoDB Introduction",
        "Case Study Completion in Scilab from IITB FOSSEE",
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

            {exp.proofLink && (
              <a
                href={exp.proofLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-purple-400 hover:text-white underline"
              >
                View my Completed Case Study here (S.No - 31)→
              </a>
            )}

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



        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          mb-12
          mt-24
          "
        >

          Achievements

        </h2>



        <div className="grid md:grid-cols-2 gap-6">


        {achievements.map((item,index)=>(


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


            <h3
              className="
              text-2xl
              font-black
              text-purple-400
              mb-3
              "
            >

              {item.title}

            </h3>


            <p className="text-gray-300 leading-relaxed">

              {item.detail}

            </p>


          </div>


        ))}


        </div>



        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          mb-12
          mt-24
          "
        >

          Certifications

        </h2>



        <div className="space-y-8">


        {certificationGroups.map((group,index)=>(


          <div
            key={index}
            className="
            border
            border-purple-500/30
            rounded-3xl
            p-8
            bg-white/5
            backdrop-blur
            "
          >


            <h3
              className="
              text-2xl
              font-black
              text-purple-400
              mb-6
              "
            >

              {group.category}

            </h3>



            <div className="flex flex-wrap gap-3">

              {group.items.map(item=>(

                <span
                  key={item}
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

                  {item}

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
