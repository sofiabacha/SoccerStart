# SOCCER STATS WEBPAGE

# Youtube link: https://youtu.be/V7tBVZZpU6g

A full-stack Soccer statisics page that displays this seasons Premier League matches (2025) and allows
user to search teams and get their recent match summaries. 

Built with **React** (frontend) and **FastAPI + PostgreSQL** (backend).

## Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React)       │◄──►│   (FastAPI)     │◄──►│   (PostgreSQL)  │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Project Structure

```
backend/                          
├── core/                        # Core configuration
│   └──database.py               # Database connection setup
├── models/                      # Database models (tables)
│   └── match.py                 # Matches table structure
├── router/                      # Routers
│   └── match_router.py          # Match connection router calls
├── services/                    # Service file
│   └── scraper_service.py       # Fethers and inputs data into db
├── main.py                      # Application entry point            
└── requirements.txt             # Python dependencies
```
# Getting Started

This project includes both a **FastAPI backend** and a **React frontend**.  
Follow the steps below to set up and run the project locally.

---

## ⚙️ Backend Setup (FastAPI)

### 1️ Navigate to the backend directory
### 2 Create a local directory
### 3 Activate enviornment
### 4 Install dependenceis
### 5 Run backend server
```bash
cd backend

python -m venv venv

venv\Scripts\activate (macOS/Linux: source venv/bin/activate)

pip install -r requirements.txt

uvicorn main:app --reload

```
---

## ⚙️ Frontend Setup (React + Vite)

### 1️ Navigate to the frontend directory
### 2 Install dependenceis
### 3 Run frontend server
```bash
cd ../frontend

npm install

npm run dev

```

---
## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run preview`

Locally preview your program before deployment.