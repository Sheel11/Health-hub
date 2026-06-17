import logging
from fastapi import HTTPException
from . import models , schemas
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from .db_utils import verify_password , hash_password
from app.core.security import create_token

logger = logging.getLogger('Health-Hub')

def get_user(db : Session , SignIn : schemas.UserSignIn):
    try:
        return (
            db 
            .query(models.Users)
            .filter(models.Users.email == SignIn.email)
            .first()
        )
    except Exception as e:
        db.rollback()
        logger.info(f'Error occured in database connectivity{e}')
        raise HTTPException(status_code=404 , detail='DB Connection failed')



def add_user(db : Session , user : schemas.UserBase):
    try:  
        password = hash_password(user.password)
        db_user = models.Users(name = user.name , 
        email = user.email , dob = user.dob , cno = user.cno , gender = user.gender , hashed_password = password)
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except IntegrityError:
        db.rollback() 
        logger.error(f"Failed signup attempt: Email {user.email} already exists")
        raise HTTPException(status_code=400, detail="A user with this email already exists.")
    
    except Exception as e:
        db.rollback()
        logger.info(f'Error occured in database connectivity{e}')
        raise HTTPException(status_code=404 , detail='DB Connection failed')
       


def add_contact(db : Session , data : schemas.Contact):
    try:
        db_user = db.query(models.Users).filter(models.Users.email == data.email).first()
        if db_user:
            db_user.message = data.message
            db.commit()
            return db_user
        else:
            db_contact = models.Contact(name = data.name , 
                                        email = data.email , cno = data.cno , message = data.message)
            db.add(db_contact)
            db.commit()
            return db_contact
        
    except Exception as e:
        db.rollback()
        logger.info(f'Error occured in database connectivity{e}')
        raise HTTPException(status_code=404 , detail='DB Connection failed')


