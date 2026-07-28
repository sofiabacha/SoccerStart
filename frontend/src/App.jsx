import { useEffect, useState } from 'react'
import { getTeams } from './api'
import './App.css'

function App() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    getTeams().then(setTeams)
  }, [])

  return (
    <div className="min-h-screen bg-[#0A0F0C] text-white p-6">
      <h1 className="text-2xl font-bold">Matchday One</h1>
      {teams.map(t => (
        <div key={t.id} className="mt-4 p-4 bg-[#131A16] rounded-xl">
          {t.name} — {t.league}
        </div>
      ))}
    </div>
  )
}

export default App