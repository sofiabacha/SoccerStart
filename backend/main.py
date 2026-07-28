from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Matchday One API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # your frontend dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"status": "Matchday One API is running"}

@app.get("/api/teams")
def get_teams():
    # Mock data for now
    return [
        {"id": 1, "name": "Arsenal", "league": "Premier League", "form": ["W","W","D","L","W"]},
        {"id": 2, "name": "Real Madrid", "league": "La Liga", "form": ["W","W","W","D","W"]},
    ]