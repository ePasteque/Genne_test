import requests
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

from env import config

DATABASE_URL = config("DATABASE_URL", cast=str, default=None)
engine = create_engine(DATABASE_URL)
LocalSession = sessionmaker(bind=engine)


def get_session():
    session = LocalSession()
    try:
        yield session
    finally:
        session.close()
