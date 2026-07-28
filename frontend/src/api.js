const API_BASE = 'http://localhost:8000'

export async function getTeams() {
    const res = await fetch(`${API_BASE}/api/teams`)
    return res.json()    
}

