import axios from "axios";

const API_BASE = "http://127.0.0.1:8000";

export const getCurrentMatches = async () => {
    const res = await axios.get(`${API_BASE}/matches/`);
    return res.data;
};

export const getTeamSummary = async (teamName) => {
    const res = await axios.get(`${API_BASE}/matches/summary/${encodeURIComponent(teamName)}`);
    return res.data;
};

export const scrapeMatches = async () => {
    const res = await axios.get(`${API_BASE}/matches/scrape`);
    return res.data;
};

export const searchTeam = async (query) => {
    const res = await axios.get(`${API_BASE}/matches/search`, {
        params: { query },
    });
    return res.data;
};