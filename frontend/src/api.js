import axios from "axios";

const API_BASE = "http://localhost:5000";

export const fetchMatches = () => axios.get(`${API_BASE}/matches`);
export const triggerScrape = () => axios.get(`${API_BASE}/scrape`);