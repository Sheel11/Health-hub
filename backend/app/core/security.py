import os
from datetime import datetime , timezone , timedelta
from jose import jwt , JWTError
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY  = os.getenv("SECRET_KEY")
ALGORITHM  = os.getenv("JWT_ALGORITHM")

def create_token(data:dict , expire_minutes = 30):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=expire_minutes)
    print(expire)
    to_encode.update({'exp' : expire})

    return jwt.encode(
        to_encode ,
        SECRET_KEY ,
        algorithm=ALGORITHM
    )

def verify_token(token : str):
    try : 
        payload = jwt.decode(
            token,
            SECRET_KEY ,
            algorithms=[ALGORITHM]
        )
        return payload
    
    except JWTError:
        return None


