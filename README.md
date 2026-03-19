# Arrangering av turer i naturen

A web app for organizing and joining hiking trips. Users can create trips with a name, description, location, date, difficulty level, and capacity. Other users can sign up as participants.

## Stack

- **Backend:** Django REST Framework
- **Frontend:** React (TypeScript)

## Getting started

### Backend

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend

```bash
cd frontend
yarn install
yarn start
```

The frontend runs on `http://localhost:3000` and the backend on `http://localhost:8000`.
