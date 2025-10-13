import React, { useEffect, useState } from 'react'
import { getCurrentMatches, getTeamSummary, searchTeam } from './api';
import TeamSummary from "./components/TeamSummary";
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
              Clear Summary
            </button>
          </div>
        )}

        <div>
          <h2>Current Matches</h2>
          {matches.length > 0 ? (
            <ul>
              {matches.map((m, i) => (
                <li key={i}>
                  {m.home_team} vs {m.away_team} -{' '}
                  {m.date ? new Date(m.date).toLocaleString() : 'TBD'}{' '}
                  {m.score_home !== null && m.score_away !== null
                    ? `| ${m.score_home}-${m.score_away}`
                    : ''}
                </li>
              ))}
            </ul>
          ) : (
            <p>No current matches available.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
