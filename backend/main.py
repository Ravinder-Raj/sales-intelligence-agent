from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from graph import build_graph
from dotenv import load_dotenv
import os
import traceback

load_dotenv()

# Initialize FastAPI app
app = FastAPI(
    title="Sales Intelligence Agent",
    description="AI powered sales intelligence and outreach email generator",
    version="1.0.0"
)

# Setup CORS — allows frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("FRONTEND_URL"),
        "http://127.0.0.1:5173",
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
print(os.getenv("FRONTEND_URL"))


# Build graph once when server starts
graph = build_graph()

# Request model — what frontend sends
class AnalyzeRequest(BaseModel):
    company_name: str
    product: str

# Response model — what we send back
class AnalyzeResponse(BaseModel):
    company_name: str
    report: str
    email: str

# Health check endpoint
@app.get("/")
def health_check():
    return {"status": "Sales Intelligence Agent is running!"}

# Main endpoint
@app.post("/analyze", response_model=AnalyzeResponse)
async def analyze(request: AnalyzeRequest):
    try:
        result = await graph.ainvoke({
            "company_name": request.company_name,
            "product": request.product,
            "company_overview": None,
            "recent_news": None,
            "pain_points": None,
            "analysis": None,
            "report": None,
            "email": None
        })

        return AnalyzeResponse(
            company_name=request.company_name,
            report=result["report"],
            email=result["email"]
        )

    except Exception as e:
        traceback.print_exc()  # prints full error in terminal
        raise HTTPException(
            status_code=500,
            detail=f"Agent failed: {str(e)}"
        )
