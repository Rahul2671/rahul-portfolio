import React from "react";

const AIDashboard = () => {

  const stack = {

    Programming: [
      "Python",
      "SQL",
      "Java",
      "C++"
    ],

    "Data Science": [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Statistics",
      "Data Cleaning",
      "Data Visualization"
    ],

    "Artificial Intelligence": [
      "LLM Applications",
      "Prompt Engineering",
      "FastAPI",
      "Gemini API"
    ],

    Backend: [
      "FastAPI",
      "Django",
      "Flask",
      "Node.js"
    ],

    Databases: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQLite"
    ],

    "Cloud & Tools": [
      "AWS",
      "Git",
      "Linux"
    ],

    Frontend: [
      "React",
      "Tailwind CSS",
      "Bootstrap"
    ]

  };


  return (

    <section
      id="ai-dashboard"
      className="
      bg-[#050505]
      py-24
      px-6
      md:px-12
      text-white
      "
    >


      <div className="max-w-6xl mx-auto">


        {/* Heading */}

        <h2
          className="
          text-5xl
          md:text-6xl
          font-black
          mb-14
          "
        >

          Developer Command Center

        </h2>




        <div
          className="
          rounded-3xl
          bg-black
          border
          border-purple-500/40
          shadow-[0_0_60px_rgba(124,58,237,0.25)]
          p-8
          md:p-12
          "
        >


          {/* Terminal Header */}

          <div
            className="
            flex
            gap-2
            mb-8
            "
          >

            <span className="w-3 h-3 rounded-full bg-red-500"/>
            <span className="w-3 h-3 rounded-full bg-yellow-400"/>
            <span className="w-3 h-3 rounded-full bg-green-500"/>

          </div>



          <p
            className="
            text-purple-400
            font-mono
            mb-10
            "
          >

            Rahul_R@portfolio:~$

          </p>





          <div
            className="
            grid
            md:grid-cols-2
            gap-12
            "
          >


            {/* Profile */}

            <div>


              <h3
                className="
                text-3xl
                font-black
                mb-5
                "
              >

                Identity

              </h3>


              <div
                className="
                space-y-3
                font-mono
                text-gray-300
                "
              >

                <p>
                  Role:
                  <span className="text-purple-400">
                    {" "}Aspiring Data Scientist
                  </span>
                </p>


                <p>
                  Focus:
                  <span className="text-purple-400">
                    {" "}Data Science + AI + Backend
                  </span>
                </p>


                <p>
                  Location:
                  <span className="text-purple-400">
                    {" "}Chennai, India
                  </span>
                </p>


                <p className="text-green-400 mt-5">
                  ● Building data-driven intelligent systems
                </p>


              </div>


            </div>





            {/* Current Work */}

            <div>


              <h3
                className="
                text-3xl
                font-black
                mb-5
                "
              >

                Currently Exploring

              </h3>



              <ul
                className="
                space-y-3
                text-gray-300
                "
              >

                <li>
                  → Production AI Agents (LangChain & LangGraph)
                </li>

                <li>
                  → Model Context Protocol (MCP)
                </li>

                <li>
                  → FastAPI & AI Backend Systems
                </li>

                <li>
                  → AWS EC2 Deployment for AI Applications
                </li>


              </ul>


            </div>


          </div>





          {/* Tech Stack */}


          <div className="mt-16">


            <h3
              className="
              text-3xl
              font-black
              mb-8
              "
            >

              Tech Arsenal

            </h3>



            <div
              className="
              grid
              md:grid-cols-2
              gap-8
              "
            >


            {Object.entries(stack).map(([category,items])=>(


              <div
                key={category}
                className={`
                bg-white/5
                rounded-2xl
                p-6
                border
                border-white/10
                ${category === "Frontend" ? "opacity-60" : ""}
                `}
              >


                <h4
                  className="
                  text-purple-400
                  font-bold
                  mb-4
                  "
                >

                  {category}

                </h4>



                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  "
                >

                {items.map(item=>(


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



        </div>


      </div>


    </section>

  );

};


export default AIDashboard;
