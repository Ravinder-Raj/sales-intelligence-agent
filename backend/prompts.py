# prompts.py

COMPANY_OVERVIEW_PROMPT = """
Search for general information about {company_name}.
Find what they do, their industry, size, and main products or services.
Return a clean and concise summary.
"""

RECENT_NEWS_PROMPT = """
Search for the latest news about {company_name} in 2025.
Focus on recent developments, challenges, expansions, or changes.
Return the most relevant and recent findings.
"""

PAIN_POINTS_PROMPT = """
Search for problems, complaints, and challenges faced by {company_name}.
Look for customer complaints, industry challenges, or operational issues.
Return a clear list of their main pain points.
"""

ANALYSIS_PROMPT = """
You are an expert sales analyst.

Company Name: {company_name}
Product Being Sold: {product}

Company Overview:
{company_overview}

Recent News:
{recent_news}

Pain Points:
{pain_points}

Based on all the above information:
1. Identify which pain points the product can directly solve
2. Find connections between recent news and the product's value
3. Rate the sales opportunity as High, Medium, or Low
4. Explain why this company is or is not a good fit

Be specific and data driven. Use actual information from above, not generic statements.
"""

REPORT_PROMPT = """
You are a professional sales intelligence writer.

Based on this analysis:
{analysis}

Write a clean, structured sales intelligence report with these sections:

1. Company Snapshot
2. Recent Developments  
3. Key Pain Points
4. Product Fit Assessment
5. Sales Opportunity Rating
6. Recommended Talking Points

Make it professional, concise, and actionable for a salesperson.
"""

EMAIL_PROMPT = """
You are an expert B2B sales copywriter.

Company Name: {company_name}
Product Being Sold: {product}

Sales Intelligence:
{analysis}

Write a personalized cold outreach email that:
- Has a compelling subject line
- Opens with something specific about the company (not generic)
- Connects their pain points to the product naturally
- Has a clear and simple call to action
- Is under 150 words
- Sounds human, not like a template

Format:
Subject: ...
Body: ...
"""