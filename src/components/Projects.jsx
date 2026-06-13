import React from "react";

const Projects = () => {

  const projects = [

    {
      year: "2026",
      title: "Context Drift Validator",
      description:
        "Built a validation framework to identify context inconsistencies in Zero Trust IoT security systems.",
      stack:
        "NS3, C++, Git",
      impact:
        "Improves reliability of security workflows in intelligent networks.",
      slug: "context-drift-validator"
    },


    {
      year: "2025",
      title: "Automated Authenticity Verification System",
      description:
        "Developed TAAV Framework to verify ancient Tamil inscriptions by combining visual analysis, linguistic intelligence, and historical provenance modeling.",
      stack:
        "Python, Machine Learning, AI",
      impact:
        "Research-oriented solution combining AI with digital heritage preservation.",
      slug: "authenticity-verification-system"
    },


    {
      year: "2025",
      title: "Lightweight ML Framework for IoT Security",
      description:
        "Developed a security-focused machine learning framework designed for resource-constrained IoT environments.",
      stack:
        "Python, Machine Learning, IoT Security",
      impact:
        "Focused on scalable and efficient intelligent security solutions.",
      slug: "iot-security-framework"
    },


    {
      year: "2025",
      title: "AI Powered DAO for Decentralized Talent Funding",
      description:
        "Explored decentralized AI-driven approaches for supporting talent funding ecosystems using intelligent decision systems.",
      stack:
        "AI, Blockchain, Web3",
      impact:
        "Combines AI systems with decentralized platforms for future talent ecosystems.",
      slug: "ai-powered-dao"
    },


    {
      year: "2025",
      title: "Hyperparameter Optimization in FOSSEE Toolbox",
      description:
        "Worked on integrating optimization techniques into FOSSEE ecosystem during internship work.",
      stack:
        "Scilab, Optimization, Machine Learning",
      impact:
        "Improves ML experimentation and optimization workflows.",
      slug: "fossee-optimization"
    }

  ];


  return (

    <section
      id="projects"
      className="
      bg-gradient-to-b
      from-white
      to-purple-50
      py-24
      px-6
      md:px-12
      "
    >

      <div className="max-w-5xl mx-auto">


        <h2
          className="
          text-5xl
          font-black
          text-gray-900
          mb-20
          "
        >
          Engineering Journey
        </h2>



        <div className="relative">


          {/* Timeline */}

          <div
            className="
            absolute
            left-5
            top-0
            h-full
            w-1
            bg-gradient-to-b
            from-purple-600
            to-indigo-600
            rounded-full
            "
          />



          <div className="space-y-16">


          {projects.map((project,index)=>(


            <div
              key={index}
              className="
              relative
              pl-16
              "
            >


              {/* Timeline Dot */}

              <div
                className="
                absolute
                left-0
                top-4
                w-11
                h-11
                rounded-full
                bg-purple-600
                border-4
                border-white
                shadow-xl
                flex
                items-center
                justify-center
                text-white
                font-bold
                "
              >
                {index+1}
              </div>




              <div
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-xl
                border
                border-purple-100
                hover:-translate-y-2
                transition
                duration-300
                "
              >


                <div className="flex justify-between items-center mb-3">


                <h3
                  className="
                  text-2xl
                  font-black
                  text-purple-700
                  "
                >
                  {project.title}
                </h3>


                <span
                  className="
                  text-sm
                  font-bold
                  bg-indigo-100
                  text-indigo-700
                  px-4
                  py-1
                  rounded-full
                  "
                >
                  {project.year}
                </span>


                </div>



                <p className="text-gray-700 mb-6">
                  {project.description}
                </p>



                <div className="space-y-3">


                <p className="text-black">
                  <span className="font-bold text-purple-700">
                    Stack:
                  </span>{" "}
                  {project.stack}
                </p>



                <p className="text-black">
                  <span className="font-bold text-purple-700">
                    Impact:
                  </span>{" "}
                  {project.impact}
                </p>


                </div>



                <a
                  href={`/projects/${project.slug}`}
                  className="
                  inline-block
                  mt-6
                  bg-black
                  text-white
                  px-6
                  py-2
                  rounded-full
                  hover:bg-purple-700
                  transition
                  "
                >
                  View More Details →
                </a>



              </div>


            </div>


          ))}


          </div>


        </div>


      </div>


    </section>

  );

};


export default Projects;