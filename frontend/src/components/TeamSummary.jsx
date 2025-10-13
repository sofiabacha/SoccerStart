import React from "react";

export default function TeamSummary({ summary, onBack }) {
    return (
        <div className="team-summary">
            <button onClick={onBack}>← Back</button>
            <h2>{summary.team}</h2>
            <h3>Past 3 Matches</h3>
            <ul>
                {summary.past_matches.map((m,i) => (
                    <li key={i}>
                        {m.home} {m.score} {m.away} ({new Date(m.date).toLocaleDateString()})
                    </li>
                ))}
            </ul>
            <h3>Upcoming Matches</h3>
            <ul>
                {summary.past_matches.map((m,i) => (
                    <li key={i}>
                            {m.home} vs {m.away} ({new Date(m.date).toLocaleDateString()})
                    </li>
                ))}
            </ul>
        </div>
    );
}