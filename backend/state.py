# state.py

#------------ IMPORTS -------------------------
from typing import TypedDict , Optional 

#------------ AGENT STATE CLASSS ---------------
class AgentState(TypedDict):
    # User inputs
    company_name: str
    product: str

    # Search result (filled by node 1, 2, 3)
    company_overview: Optional[str]
    recent_news: Optional[str]
    pain_points: Optional[str]

    #LLM analysis ( filled by node 4, 5, 6)
    analysis: Optional[str]
    email: Optional[str]
    report: Optional[str]