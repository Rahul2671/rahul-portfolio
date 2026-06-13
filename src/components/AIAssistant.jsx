import React, { useState } from "react";

const AIAssistant = () => {

  const [open,setOpen] = useState(false);
  const [minimized,setMinimized] = useState(false);

  const [message,setMessage] = useState("");
  const [chat,setChat] = useState([]);
  const [loading,setLoading] = useState(false);



  const sendMessage = async()=>{

    if(!message.trim()) return;


    const userMsg = message;


    setChat(prev=>[
      ...prev,
      {
        role:"user",
        text:userMsg    
      }
    ]);


    setMessage("");
    setLoading(true);


    try{

      const res = await fetch(
        "https://rahul-portfolio-0iu0.onrender.com/chat",
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            message:userMsg
          })
        }
      );

      if (!res.ok) {
        throw new Error("Server error");
      }


      const data = await res.json();


      setChat(prev=>[
        ...prev,
        {
          role:"ai",
          text:data.reply
        }
      ]);

    }
    catch(err){

      setChat(prev=>[
        ...prev,
        {
          role:"ai",
          text:"Unable to connect with AI server."
        }
      ]);

    }


    setLoading(false);

  }



  const handleKey=(e)=>{
    if(e.key==="Enter"){
      sendMessage();
    }
  }




return (

<>

{/* Floating Button */}

<button

onClick={()=>setOpen(!open)}

className="
fixed
bottom-6
right-6
w-16
h-16
rounded-full
bg-purple-700
text-white
text-3xl
shadow-2xl
z-50
hover:scale-110
transition
"

>

🤖

</button>



{open && (

<div

className={`
fixed
bottom-24
right-6
w-[340px]
bg-white
rounded-3xl
shadow-2xl
z-50
overflow-hidden
border
transition-all
duration-300

${minimized ? "h-16" : "h-[450px]"}

`}

>


{/* Header */}

<div

className="
bg-gradient-to-r
from-purple-700
to-indigo-700
text-white
p-4
flex
justify-between
items-center
"

>


<div>

<p className="font-bold">
Rahul AI Assistant
</p>


{
!minimized &&
<p className="text-xs opacity-80">
Ask about my portfolio
</p>
}

</div>



<div className="flex gap-3">


<button

onClick={()=>setMinimized(!minimized)}

className="
hover:scale-110
"

>

{
minimized ? "⬆️" : "➖"
}

</button>



<button

onClick={()=>setOpen(false)}

className="
hover:scale-110
"

>

✖

</button>


</div>


</div>





{!minimized && (

<>


{/* Chat */}

<div

className="
flex-1
h-[310px]
p-4
overflow-y-auto
space-y-3
bg-gray-50
"

>


{
chat.length===0 &&

<p className="
text-gray-500
text-sm
text-center
mt-10
">

Hi 👋
<br/>
Ask me anything about Rahul

</p>

}



{
chat.map((c,i)=>(


<div

key={i}

className={`

max-w-[80%]
p-3
rounded-2xl
text-sm
shadow

${
c.role==="user"

?

"bg-purple-600 text-white ml-auto"

:

"bg-white text-black mr-auto"

}

`}

>

{c.text}

</div>


))

}



{
loading &&

<div
className="
bg-white
text-black
p-3
rounded-xl
w-fit
text-sm
"
>

Typing...

</div>

}


</div>






{/* Input */}

<div

className="
p-3
bg-white
flex
gap-2
border-t
"

>


<input

value={message}

onChange={(e)=>setMessage(e.target.value)}

onKeyDown={handleKey}

placeholder="Ask me..."

className="
flex-1
text-black
border
rounded-full
px-4
py-2
outline-none
"

/>



<button

onClick={sendMessage}

className="
bg-purple-700
text-white
px-4
rounded-full
"

>

➤

</button>


</div>


</>

)}


</div>

)}


</>

);

}


export default AIAssistant;