import React, { useEffect, useState } from 'react'
import { getCurrentMatches, getTeamSummary } from './api';
import './App.css';

function App() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState("");
  const [teamSummary, setTeamSummary] = useState(null);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const data = await getCurrentMatches();
        setMatches(data);
      } catch (err) {
        console.error("Failed to get matches", err);
      }
    };
    getMatches();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setTeamSummary(null)

    try {
      const data = await getTeamSummary(search.trim());
      if (data.error) {
        alert(data.error);
        return;
      }
      setTeamSummary(data)
    } catch (err) {
      alert("Team not found or summary not available");
      console.error(err);
    }
  };

  const finishedMatches = matches.filter((m) => m.status === "FINISHED");
  const upcomingMatches = matches.filter((m) => m.status !== "FINISHED" && m.status !== "CANCELLED");

  return (
    <div className="webpage-container">
      <header>
        <h1>Soccer Stats</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
        {teamSummary && (
          <div className="team-summary">
            <h2>{teamSummary.team}</h2>
            <h3>Past Matches:</h3>
            {teamSummary.past_matches.length > 0 ? (
              <ul>
                {teamSummary.past_matches.map((m,i) => (
                  <li key={i}>
                    {m.home} vs {m.away} - {new Date(m.date).toLocaleString()} | {m.score}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No past matches available.</p>
            )}

            <h3>Upcoming Matches</h3>
              {teamSummary.upcoming_matches.length > 0 ? (
              <ul>
                {teamSummary.upcoming_matches.map((m,i) => (
                  <li key={i}>
                    {m.home} vs {m.away} - {new Date(m.date).toLocaleString()} | {m.score}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No upcoming matches scheduled.</p>
            )}

            <button
              onClick={() => setTeamSummary(null)}
              className="clear-button"
            >
              Go back
            </button>
          </div>
        )}

        <div className="matches-grid">
          <div className="matches-column">
            <h2>Finished Matches</h2>
            {finishedMatches.length > 0 ? (
              <ul className='match-list'>
                {finishedMatches.map((m, i) => (
                  <li key={i} className='match-card finished'>
                    <div className='match-teams'>
                      {m.home_team} vs {m.away_team} 
                    </div>
                    <div className='match-date'>
                      {m.date ? new Date(m.date).toLocaleString() : 'TBD'}{' '}
                    </div>
                    <div className='match-score'>
                      {m.score_home !== null && m.score_away !== null
                        ? `| ${m.score_home}-${m.score_away}`
                        : ''}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className='no-matches'>No finished matches available.</p>
            )}
          </div>
        
          <div className='matches-column'>
            <h2>Upcoming Matches</h2>
              {upcomingMatches.length > 0 ? (
                <ul className='match-list'>
                  {upcomingMatches.map((m,i) => (
                    <li key={i} className='match-card upcoming'>
                      <div className='match-teams'>
                        {m.home_team} vs {m.away_team} 
                      </div>
                      <div className='match-date'>
                        {m.date ? new Date(m.date).toLocaleString() : 'TBD'}{' '}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className='no-matches'>No upcoming matches scheduled.</p>
              )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
