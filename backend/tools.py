# tools.py

#------------- IMPORTS ------------------------------
from langchain_tavily import TavilySearch
from dotenv import load_dotenv
import os

load_dotenv()

#Initialize tavily search tool
search_tool = TavilySearch(
    api_key = os.getenv("TAVILY_API_KEY"),
    max_result = 5,
    depth_search = "advanced"
)