# Fake Job Post Detector

A serverless application to detect fraudulent job postings using AWS Lambda, API Gateway, and S3-hosted React frontend.

## Structure
- `frontend`: React web app
- `backend`: FastAPI API
- `.github/workflows`: CI/CD pipelines

## How to Run Locally

### Frontend
Navigate to the `frontend` directory:
   ```bash
    cd frontend
    npm start
   ```
### Backend
Navigate to the `backend` directory:
   ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    uvicorn main:app --reload --host
   ```