from fastapi import Header , HTTPException
from app.core.security import verify_token


def get_current_user(authorization : str = Header(...)):
    try:
        scheme, token = authorization.split()

        if scheme.lower() != "bearer":
            raise HTTPException(
                status_code=401,
                detail="Invalid auth scheme"
            )

    except ValueError:
        raise HTTPException(
            status_code=401,
            detail="Invalid Authorization header format"
        )

    payload = verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=401,
            detail="Invalid JWT Token"
        )
    
    return payload

