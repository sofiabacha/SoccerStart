import React, { useEffect, useState } from "react";
import { followTeam } from "../api";
import "./TeamList.css";

const TeamList = ({ userId }) => {
    const [teams, setTeams] = useState([]);
    const [message, setMessage] = useState("");
    const [followedTeams, setFollowedTeams] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/teams")
        .then(res => res.json())
        .then(data => setTeams(data))
        .catch(err => console.errpr(err));

        fetch(`http://127.0.0.1:8000/users/${userId}/followed_teams`)
        .then(res => res.json())
        .then(data => setFollowedTeams(data))
        .catch(err => console.error(err));
    }, [userId]);

    const handleFlow = async (teamId) => {
        const res = await followTeam(userId, teamId);
        if (res.following) {
            setFollowedTeams(res.following);
            setMessage(`Added ${res.following.join(", ")}`);
        }
    };
    
    return (
        <div className="team-list-container">
            <h2>Select teams to follow!</h2>
            {message && <p className="message">{message}</p>}
            <ul>
                {teams.map(team => (
                    <li key={team.id} className="team-item">
                        {team.name}{" "}
                        {followedTeams.find(t => t.id === team.id) ? (
                            <span> Following!</span>
                        ) : (
                        <button onClick={() => handleFlow(team.id)}>Add Team</button>
                        )}
                    </li>
                ))}
            </ul>{followedTeams.length > 0 && (
                <div className="followed-teams">
                    <h3>Followed Teams:</h3>
                    <ul>
                        {followedTeams.map(t => (
                            <li key={t}>{t}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default TeamList;