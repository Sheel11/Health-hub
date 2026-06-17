import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv

load_dotenv()


POSTGRES_DATABASE_URL = os.getenv('DB_URL')

engine = create_engine(POSTGRES_DATABASE_URL)

session_local = sessionmaker(bind=engine , autoflush=False , autocommit = False)

Base = declarative_base()

