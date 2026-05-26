# graph.py

# ---------- IMPORTS ---------------------------------
from langgraph.graph import StateGraph , END
from state import AgentState
from nodes import (
    search_company_overview,
    search_recent_news,
    search_pain_points,
    analyze_and_match,
    generate_report,
    generate_email
)

# --------------Build Graph ------------------------------
def build_graph():
    # Initialioze our graph with poour state
    workflow = StateGraph(AgentState)

    # Add all 6 nodes
    workflow.add_node("search_company_overview", search_company_overview)
    workflow.add_node("search_recent_news", search_recent_news)
    workflow.add_node("search_pain_points", search_pain_points)
    workflow.add_node("analyze_and_match", analyze_and_match)
    workflow.add_node("generate_report", generate_report)
    workflow.add_node("generate_email", generate_email)

    # Set entry point — first node to run
    workflow.set_entry_point("search_company_overview")

    # Connect nodes with edges — one by one in order
    workflow.add_edge("search_company_overview", "search_recent_news")
    workflow.add_edge("search_recent_news", "search_pain_points")
    workflow.add_edge("search_pain_points", "analyze_and_match")
    workflow.add_edge("analyze_and_match", "generate_report")
    workflow.add_edge("generate_report", "generate_email")
    workflow.add_edge("generate_email", END)

    return workflow.compile()