from sqlalchemy import Column, Integer, String
from db import Base

class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True)
    home_team = Column(String)
    away_team = Column(String)
    date = Column(String)