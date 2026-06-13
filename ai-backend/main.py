from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

@app.get("/")
def home():
    return {"message": "Rahul AI Assistant Running 🚀"}

@app.post("/chat")
async def chat(data: dict):

    user_message = data.get("message", "")

    prompt = f"""
You are Rahul AI Assistant.

You ONLY answer about Rahul, a Computer Science student and AI developer.

Question:
{user_message}
"""

    try:
        response = requests.post(
            "https://api.groq.com/openai/v1/chat/completions",
            headers={
                "Authorization": f"Bearer {GROQ_API_KEY}",
                "Content-Type": "application/json"
            },
            json={
                "model": "llama3-70b-8192",
                "messages": [
                    {"role": "user", "content": prompt}
                ]
            }
        )

        result = response.json()

        reply = result["choices"][0]["message"]["content"]

        return {"reply": reply}

    except Exception as e:
        print("ERROR:", e)
        return {
            "reply": "AI server is temporarily unavailable."
        }