from sqlalchemy import Column , Integer , String , Date
from .databases import Base

class Users(Base):
    __tablename__ = 'users'
    name = Column(String)
    email = Column(String , primary_key=True)
    dob = Column(Date)
    cno = Column(String)
    gender = Column(String)
    hashed_password = Column(String)


class Contact(Base):
    __tablename__ = 'contacts'
    name = Column(String)
    email = Column(String , primary_key=True)
    cno = Column(String)
    message = Column(String)


