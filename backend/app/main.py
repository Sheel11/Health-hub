import logging
import joblib
from contextlib import asynccontextmanager
from fastapi import FastAPI , Depends , HTTPException 
from app.db.schemas import UserBase , UserSignIn , UserOut , Contact
from sqlalchemy.orm import Session
from app.db.databases import engine , session_local , Base
from app.db.curd import get_user , add_user , add_contact
from app.db.db_utils import hash_password , verify_password
from app.core.security import create_token 
from typing import Dict
from app.api import route_predict
from app.middlewares.cors_middlewares import register_middleware
from app.models.models_utils import MODEL_PATH


Base.metadata.create_all(bind = engine)

logger = logging.getLogger('Health-HUB')

@asynccontextmanager
async def lifespan(app : FastAPI):
    logger.info('Starting the Health-HUB API...')
    logger.info('Loading the ML Model')

    app.state.model = joblib.load(MODEL_PATH)

    yield

    logger.info('Shuting down the api !!')

app = FastAPI(lifespan=lifespan , title='Health-HUB')


#adding middleware
register_middleware(app)




# dependency with the db

def get_db():
    db = session_local()
    try:
        yield db
    finally:
        db.close()


# endoints
# 2 for login

@app.post('/sigin' , response_model=UserOut)
def login(user : UserSignIn , db : Session = Depends(get_db)):
    db_user = get_user(db , user)
    if(db_user and verify_password(user.password , db_user.hashed_password)):
        token = create_token({'sub' : user.email})
        db_user.token = token 
        return db_user
    else:
        logger.info("User is not Found")
        raise HTTPException(status_code=404 , detail='user not found')


# 2 for user registeration

@app.post('/signup' , response_model=UserOut)
def register(user : UserBase , db : Session = Depends(get_db)):
    db_user = add_user(db , user)
    token = create_token({'sub' : db_user.email})
    db_user.token = token
    return db_user



# 3 for prediction route
app.include_router(route_predict.router , tags=['Prediction'])



# 4 contact
@app.post('/contact' , response_model=Contact)
def contacts(user : Contact , db : Session = Depends(get_db)):
    return add_contact(db , user)










