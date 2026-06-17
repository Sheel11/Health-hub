from pydantic import BaseModel , EmailStr
from datetime import date

class UserBase(BaseModel):
    name : str
    email : EmailStr
    dob : date
    cno : int
    gender : str
    password : str 


class UserSignIn(BaseModel):
    email : EmailStr
    password : str


class Contact(BaseModel):
    name : str
    email : EmailStr
    cno : int
    message : str


class UserOut(BaseModel):
    name : str
    email : EmailStr
    dob : date
    cno : int
    gender : str
    token : str



