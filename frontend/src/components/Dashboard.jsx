import React, { useEffect, useState } from "react";
import { getDashboard } from "../api";
import Matches from "./Matches";
import "./Dashboard.css";

const Dashboard = ({ userId }) => {
    const [dashboard, setDashboard] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const data = await getDashboard(userId);
            setDashboard(data);
        };
        fetchData();
    }, [userId]);

    return (
        <div className="dashboard-container">
            <h2> Dashboard </h2>
            {Object.keys(dashboard).length === 0 ? (
                <p> No followed teams yet. Add teams to see stats.</p>
            ) : (
                Object,keys(dashboard).map(team => (
                    <div key={team} className="team-dashboard">
                        <h3>{team}</h3>
                        <p>Last 3 Matches:</p>
                        {dashboard[team].last_matches.map(match => (
                            <Matches key={match.id} match={match} />
                        ))}
                        <p> Next 3 Matches: </p>
                        {dashboard[team].upcoming_matches.map(match => (
                            <Matches key={match.id} match={match} />
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};

export default Dashboard;