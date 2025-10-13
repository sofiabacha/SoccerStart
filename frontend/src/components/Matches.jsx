import React from "react";
import "./Matches.css";

const Matches = ({ match }) => {
    return (
        <div className="match-card">
            <p>
                <strong>{match.home_team_rel.name}</strong> vs{" "}
                <strong>{match.away_team_rel.name}</strong>
            </p>
            {match.status == "FINISHED" ? (
                <p>
                    Score: {match.score_home} - {match.score_away}
                </p>
            ) : (
                <p> Status: {match.status} </p>
            )}
        </div>
    );
};

export default Matches;