# ===================================================
# FastAPI Backend - Main Application
# ===================================================
# Placeholder for FastAPI backend implementation
# ===================================================

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Trigonal API", version="1.0.0")

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://trigonaltechnology.com", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    """Health check endpoint for Docker healthchecks"""
    return {"status": "healthy", "service": "trigonal-backend"}

@app.get("/")
async def root():
    """Root endpoint"""
    return {"message": "Trigonal API", "version": "1.0.0"}

# TODO: Add your API routes here
# Example:
# @app.post("/api/consult")
# async def submit_consultation(data: ConsultationRequest):
#     ...
