# nodes.py

# --------------------IMPORTS -------------------
from langchain_openai import ChatOpenAI
from state import AgentState
from tools import search_tool
from prompts import (
    COMPANY_OVERVIEW_PROMPT,
    RECENT_NEWS_PROMPT,
    PAIN_POINTS_PROMPT,
    ANALYSIS_PROMPT,
    REPORT_PROMPT,
    EMAIL_PROMPT
)
import os
from dotenv import load_dotenv

load_dotenv()

# Initialize LLM 
llm = ChatOpenAI(
    api_key = os.getenv("NVIDIA_API_KEY"),
    base_url = os.getenv("NVIDIA_BASE_URL"),
    model = os.getenv("LLM_MODEL")
)

# ---- Helper: safely extract content from Tavily result ----
def extract_contents(result) -> str:
    raw = result.get("results", []) if isinstance(result, dict) else []
    return " ".join([
        r.get("content", "")
        for r in raw
        if isinstance(r, dict)
    ])

# Node 1 - Search Company Overview
def search_company_overview(state: AgentState) -> AgentState:
    print(f"Searching Company Overview for: {state['company_name']}")

    query = COMPANY_OVERVIEW_PROMPT.format(
        company_name=state["company_name"]
    )

    result = search_tool.invoke(query)
    overview = extract_contents(result)

    return {
        **state,
        "company_overview": overview
    }

# Node 2 - Search Recent News
def search_recent_news(state: AgentState) -> AgentState:
    print(f"Searching {state['company_name']} Recent News....")

    query = RECENT_NEWS_PROMPT.format(
        company_name=state["company_name"]
    )

    result = search_tool.invoke(query)
    news = extract_contents(result)

    return {
        **state,
        "recent_news": news
    }

# Node 3 - Search for Pain Points
def search_pain_points(state: AgentState) -> AgentState:
    print(f"Searching {state['company_name']} pain points....")

    query = PAIN_POINTS_PROMPT.format(
        company_name=state["company_name"]
    )

    result = search_tool.invoke(query)
    pain_points = extract_contents(result)

    return {
        **state,
        "pain_points": pain_points
    }

# Node 4 - Analyze and Match
def analyze_and_match(state: AgentState) -> AgentState:
    print(f"Analyzing and matching product to {state['company_name']}")

    prompt = ANALYSIS_PROMPT.format(
        company_name=state["company_name"],
        product=state["product"],
        company_overview=state["company_overview"],
        recent_news=state["recent_news"],
        pain_points=state["pain_points"]
    )

    response = llm.invoke(prompt)

    return {
        **state,
        "analysis": response.content
    }

# Node 5 - Generate Report
def generate_report(state: AgentState) -> AgentState:
    print("Please wait while we are generating your report....")

    prompt = REPORT_PROMPT.format(
        analysis=state["analysis"]
    )

    response = llm.invoke(prompt)

    return {
        **state,
        "report": response.content
    }

# Node 6 - Generate Email
def generate_email(state: AgentState) -> AgentState:
    print("Generating Email....")

    prompt = EMAIL_PROMPT.format(
        company_name=state["company_name"],
        product=state["product"],
        analysis=state["analysis"]
    )

    response = llm.invoke(prompt)

    return {
        **state,
        "email": response.content
    }