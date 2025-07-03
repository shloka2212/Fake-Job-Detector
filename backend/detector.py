import re

# A simple rule-based detector
def detect_fake_job(text: str) -> str:
    """
    Analyzes the text of the job post and returns 'legit' or 'fake'
    """

    suspicious_keywords = [
        "quick money",
        "wire transfer",
        "send money",
        "work from home and earn",
        "no experience required",
        "urgent hire",
        "pay to apply",
        "investment opportunity"
    ]

    suspicious_patterns = [
        r"\$\d{4,}",  # suspiciously high salaries
        r"!!!+"       # excessive exclamation marks
    ]

    score = 0

    # Check keywords
    text_lower = text.lower()
    for kw in suspicious_keywords:
        if kw in text_lower:
            score += 2

    # Check regex patterns
    for pattern in suspicious_patterns:
        if re.search(pattern, text):
            score += 1

    # Very simple threshold
    if score >= 2:
        return "fake"
    else:
        return "legit"
