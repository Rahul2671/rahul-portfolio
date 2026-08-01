import React from "react";
import { useParams, Link } from "react-router-dom";


const projectData = {

"pinit": {

title: "PinIt",

year: "2026",

stack:
"React | Node.js | Express | PostgreSQL | JWT | REST API",

problem:
"Campus communities lack a centralized platform for sharing notices, finding teammates, and staying updated on relevant events.",

solution:
"Built a full-stack community notice board with smart notifications, keyword subscriptions, team finder, and secure JWT-based authentication.",

impact:
"Improves community engagement through personalized alerts and structured notice management."

},


"codesense": {

title: "CodeSense",

year: "2026",

stack:
"Python | FastAPI | Gemini API | LLM Applications",

problem:
"Developers spend significant time on repetitive coding tasks and project setup workflows.",

solution:
"Developed an AI-powered developer productivity platform with FastAPI backend and LLM integrations to automate development workflows.",

impact:
"Accelerates developer productivity through intelligent AI-assisted tooling and backend automation."

},


"trustpay": {

title: "TrustPay",

year: "2025",

stack:
"Python | FastAPI | PostgreSQL | REST APIs",

problem:
"Secure and reliable payment processing requires robust backend systems with proper transaction validation.",

solution:
"Designed a secure payment platform with backend APIs for transaction processing, user verification, and financial data management.",

impact:
"Delivers reliable payment workflows with secure backend architecture and data integrity."

},


"bharatverse": {

title: "BharatVerse",

year: "2025",

stack:
"Python | Gemini API | Streamlit | PostgreSQL",

problem:
"Cultural heritage content is often fragmented and difficult to discover, preserve, and share digitally.",

solution:
"Built an AI-powered cultural heritage platform enabling communities to preserve, discover, and share traditions through intelligent content processing.",

impact:
"Combines AI and analytics to support digital preservation of India's cultural heritage."

},


"context-drift-validator": {

title: "Context Drift Validator",

year: "2026",

stack:
"NS3 | C++ | Git | Zero Trust Security",

problem:
"Security systems in IoT environments can suffer from context inconsistencies which affect trust decisions.",

solution:
"Developed a validation framework to detect context drift and improve reliability in Zero Trust IoT security workflows.",

impact:
"Enhances intelligent security monitoring and improves trust evaluation accuracy."

},


"authenticity-verification-system": {

title:
"Automated Authenticity Verification System",

year:
"2025",

stack:
"Python | Machine Learning | AI",

problem:
"Ancient inscriptions require automated approaches for authenticity analysis and digital preservation.",

solution:
"Developed TAAV Framework combining visual analysis, linguistic intelligence and historical provenance modeling.",

impact:
"Research-oriented AI solution supporting digital heritage preservation."

},



"iot-security-framework": {

title:
"Lightweight ML Framework for IoT Security",

year:
"2025",

stack:
"Python | ML | IoT Security",

problem:
"Resource constrained IoT devices require efficient security mechanisms.",

solution:
"Designed lightweight machine learning based security framework optimized for IoT environments.",

impact:
"Provides scalable and efficient intelligent security solutions."

},



"fossee-optimization": {

title:
"Hyperparameter Optimization in FOSSEE Toolbox",

year:
"2025",

stack:
"Scilab | Optimization | Machine Learning",

problem:
"ML experimentation requires efficient optimization workflows.",

solution:
"Worked on integrating optimization techniques into FOSSEE ecosystem.",

impact:
"Improves ML experimentation and model tuning workflows."

}

};



const ProjectDetails = () => {


const {slug} = useParams();


const project = projectData[slug];


if(!project){

return (

<div className="min-h-screen flex items-center justify-center">

<h1 className="text-3xl font-bold">
Project Not Found
</h1>

</div>

);

}



return (

<section className="
min-h-screen
bg-gradient-to-b
from-purple-950
to-black
text-white
py-24
px-6
md:px-16
">


<div className="
max-w-5xl
mx-auto
">


<Link
to="/#projects"
className="
text-purple-300
hover:text-white
"
>
← Back Projects
</Link>



<div className="
mt-12
bg-white/10
backdrop-blur-xl
rounded-3xl
p-10
border
border-white/20
">


<h1 className="
text-5xl
font-black
mb-4
">

{project.title}

</h1>


<span className="
bg-purple-500
px-5
py-2
rounded-full
">

{project.year}

</span>



<div className="mt-10 space-y-8">


<div>

<h2 className="text-2xl font-bold text-purple-300">
Tech Stack
</h2>

<p>
{project.stack}
</p>

</div>



<div>

<h2 className="text-2xl font-bold text-purple-300">
Problem
</h2>

<p>
{project.problem}
</p>

</div>




<div>

<h2 className="text-2xl font-bold text-purple-300">
Solution
</h2>

<p>
{project.solution}
</p>

</div>




<div>

<h2 className="text-2xl font-bold text-purple-300">
Impact
</h2>

<p>
{project.impact}
</p>

</div>



</div>



</div>


</div>


</section>

);

};


export default ProjectDetails;
