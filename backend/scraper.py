import requests

def scrape_matches():
    headers = {"X-Auth-Token": "47af44073edf4e4b866bd347f1327b9e"}
    response = requests.get("https://api.football-data.org/v4/matches", headers=headers)
    data = response.json()
    matches = []
    for match in data["matches"][:10]:
        matches.append({
            "home_team": match["homeTeam"]["name"],
            "away_team": match["awayTeam"]["name"],
            "date": match["utcDate"]
        })
    return matches
