import React from "react";

const Projects = () => {

  const projects = [

    {
      year: "2026",
      title: "PinIt",
      description:
        "Built a full-stack community notice board platform with smart notifications, keyword subscriptions, and team finder features for campus communities",
      stack:
        "React, Node.js, Express, PostgreSQL, JWT",
      impact:
        "Streamlines community communication with data-driven engagement and personalized alerts.",
      github:
        "https://github.com/Rahul2671/PinIt",
      slug: "pinit"
    },

    {
      year: "2026",
      title: "CodeSense",
      description:
        "Collaborated in a 2-member team to build an AI-powered developer platform that lets users upload GitHub repositories and chat with the entire codebase using RAG and LLMs. Contributed to the FastAPI backend, REST APIs, and AI service integration.",
      stack:
        "Python, FastAPI, RAG, Gemini API, LangChain, LLM Applications",
      impact:
        "Enhances developer productivity through intelligent automation and AI-assisted tooling.",
      github:
        "https://github.com/Rahul2671/AI-Developer-Copilot-Agent",
      slug: "codesense"
    },

    {
      year: "2025",
      title: "TrustPay",
      description:
        "Collaborated in a team to develop a secure payment platform. Contributed to backend API development, authentication, and database integration for transaction processing, user verification, and financial data management.",
      stack:
        "Python, XGBoost, Random Forest, FastAPI, PostgreSQL, REST APIs",
      impact:
        "Delivers reliable payment workflows with secure backend architecture and data integrity.",
      github:
        "https://github.com/Rahul2671/TrustPay",
      slug: "trustpay"
    },

    {
      year: "2025",
      title: "BharatVerse",
      description:
        "Collaborated in a multidisciplinary team to build an interactive Digital Twin dashboard for real-time visualization of national AI insights, city analytics, and decision-support systems. Contributed to frontend development and AI integration.",
      stack:
        "React, Python, Gemini API, Tailwind CSS, PostgreSQL",
      impact:
        "Developed a scalable frontend and integrated backend APIs to enable unified monitoring of critical national systems.",
      github:
        "https://.com/n-j-m06/BharatVerse",
      slug: "bharatverse"
    },

    {
      year: "2026",
      title: "Context Drift Validator",
      description:
        "Contributed to the Context Drift Validator for the Zero Trust IoT Library, enabling continuous trust validation for secure IoT network simulations.",
      stack:
        "NS3, C++, Zero Trust Architecture, Git, Linux",
      impact:
        "Open-source contribution released through the official ns-3 app store, supporting secure IoT research and improves reliability of security workflows in intelligent networks.",
      website: "https://apps.nsnam.org/app/zero-trust-iot/",
      github:
        "https://github.com/Rahul2671/zero-trust-iot",
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
        "Research contribution supporting three patent filings in AI-driven cultural heritage preservation.",
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
        "Focused on scalable and efficient intelligent security solutions supporting a journal filling",
      slug: "iot-security-framework"
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
                
                <div className="flex flex-wrap gap-4 mb-6">
                
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex
                        items-center
                        mt-5
                        px-5
                        py-3
                        rounded-xl
                        bg-purple-600
                        text-white
                        font-semibold
                        text-lg
                        shadow-lg
                        hover:bg-purple-700
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      🔗 Official Project Website
                    </a>
                  )}
                
                  {project.github && (
                    <div className="mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-purple-600 underline hover:text-purple-800"
                      >
                        GitHub Repository →
                      </a>
                    </div>
                  )}
                
                </div>
                
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
