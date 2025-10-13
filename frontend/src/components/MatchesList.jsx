import React, { useEffect, useState } from "react";
import Matches from "./Matches";

const MatchesList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/matches") 
      .then(res => res.json())
      .then(data => setMatches(data))
      .catch(err => console.error(err));
  }, []);

  if (matches.length === 0) {
    return <p>Loading matches...</p>;
  }

  return (
    <div className="matches-list">
      <h2>All Matches</h2>
      {matches.map(match => (
        <Matches key={match.id} match={match} />
      ))}
    </div>
  );
};

export default MatchesList;
