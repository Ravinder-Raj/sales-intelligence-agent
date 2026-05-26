# 🤖 AI Sales Intelligence Agent

> Generate deep company intelligence reports and personalized outreach emails in seconds — powered by LangGraph, NVIDIA LLMs, and Tavily search.

![Tech Stack](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![LangGraph](https://img.shields.io/badge/LangGraph-000000?style=flat&logo=langchain&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

---

## 📌 What it does

Enter a company name and your product — the agent autonomously:

1. **Searches** for company overview, recent news, and pain points using Tavily
2. **Analyzes** how your product maps to their challenges using an NVIDIA LLM
3. **Generates** a structured intelligence report
4. **Writes** a personalized B2B outreach email
5. **Exports** the full report as a PDF

All in one click — no manual research required.

---

## 🧠 Architecture

```
User Input (Company + Product)
        │
        ▼
┌─────────────────────────────────┐
│         LangGraph Agent         │
│                                 │
│  Node 1 → Company Overview      │
│  Node 2 → Recent News           │
│  Node 3 → Pain Points           │
│  Node 4 → Analyze & Match       │
│  Node 5 → Generate Report       │
│  Node 6 → Generate Email        │
└─────────────────────────────────┘
        │
        ▼
  FastAPI Response → React Frontend
```

---

## 🛠️ Tech Stack

### Backend
| Tool | Purpose |
|---|---|
| **FastAPI** | REST API server |
| **LangGraph** | Multi-node agent orchestration |
| **NVIDIA NIM** | LLM inference (Llama 3.1 70B) |
| **Tavily** | Real-time web search |
| **LangChain** | LLM + tool integration |

### Frontend
| Tool | Purpose |
|---|---|
| **React + Vite** | UI framework |
| **Tailwind CSS** | Styling |
| **jsPDF + html2canvas** | PDF export |
| **Lucide React** | Icons |

---

## 🚀 Getting Started

### Prerequisites
- Python 3.12+
- Node.js 18+
- NVIDIA API key → [build.nvidia.com](https://build.nvidia.com)
- Tavily API key → [tavily.com](https://tavily.com)

---

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate        # Linux/Mac
# venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment
cp .env.example .env
# Fill in your API keys in .env

# Start server
uvicorn main:app --reload
```

Backend runs at `http://localhost:8000`

---

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Set VITE_API_URL=http://localhost:8000

# Start dev server
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## 📁 Project Structure

```
sales-intelligence-agent/
├── backend/
│   ├── main.py          # FastAPI app & endpoints
│   ├── graph.py         # LangGraph agent definition
│   ├── nodes.py         # Agent nodes (search, analyze, generate)
│   ├── prompts.py       # All LLM prompts
│   ├── state.py         # AgentState schema
│   ├── tools.py         # Tavily search tool
│   ├── .env.example     # Environment variable template
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── InputForm.jsx
│   │   │   ├── LoadingState.jsx
│   │   │   ├── ReportCard.jsx
│   │   │   └── EmailCard.jsx
│   │   └── App.jsx
│   ├── .env.example
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔑 Environment Variables

### backend/.env
```
NVIDIA_API_KEY=your_key
NVIDIA_BASE_URL=https://integrate.api.nvidia.com/v1
LLM_MODEL=meta/llama-3.1-70b-instruct
TAVILY_API_KEY=your_key
```

### frontend/.env
```
VITE_API_URL=http://localhost:8000
```

---

## 📄 API Reference

### `POST /analyze`
Runs the full agent pipeline.

**Request body:**
```json
{
  "company_name": "Gymshark",
  "product": "AI-powered customer support chatbot"
}
```

**Response:**
```json
{
  "company_name": "Gymshark",
  "report": "...",
  "email": "..."
}
```

---

## 🙋 Author

**Ravinder Raj**
- LinkedIn: [linkedin.com/in/ravinder-raj](https://linkedin.com/in/ravinder-raj)
- GitHub: [github.com/ravinder-raj](https://github.com/ravinder-raj)

---

## 📜 License

MIT License — feel free to use, modify, and distribute.