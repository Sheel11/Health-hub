import os
from dotenv import load_dotenv
from fastapi import FastAPI , Request
from fastapi.middleware.cors import CORSMiddleware


ALLOWED_ORIGINS =  os.getenv('ALLOWED_ORIGINS')

def register_middleware(app : FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=ALLOWED_ORIGINS,
    allow_credentials = True,
    allow_methods = ['GET' , 'POST' , 'PUT' , "DELETE"],
    allow_headers = ['*']
    
    )