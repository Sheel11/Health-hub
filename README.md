# Health Hub

Health Hub is a full-stack healthcare web application that uses machine learning to predict possible diseases based on symptoms entered by the user. 
Along with the prediction, the application provides a confidence score,description of the disease, and recommended precautions to help users better understand 
the results.

> **Disclaimer:** This project is built for educational and demonstration purposes only.
> It should not be considered a substitute for professional medical advice, diagnosis, or treatment.

---

## Features

-  Secure user authentication with JWT
-  Disease prediction based on user symptoms using a Scikit-learn model
-  Confidence score for each prediction
-  Disease description and recommended precautions
-  FastAPI-powered REST APIs
-  Responsive frontend built with React.js and Tailwind CSS
-  PostgreSQL database integration using SQLAlchemy ORM

---

## Tech Stack

### Frontend
- React.js
- React Router
- Tailwind CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- Scikit-learn

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/sheel11/health-hub.git
cd health-hub
```

### 2. Set Up the Backend

```bash
cd backend

python -m venv venv

# Activate the virtual environment

# Windows
venv\Scripts\activate

# Linux/macOS
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the FastAPI server
uvicorn main:app --reload
```

The backend will be available at:

```
http://localhost:8000
```

Swagger API documentation:

```
http://localhost:8000/docs
```

### 3. Set Up the Frontend

```bash
cd frontend

npm install

npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## 📄 License

This project is licensed under the MIT License.
