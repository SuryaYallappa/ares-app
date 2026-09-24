# Ares

Ares is a beginner-friendly Docker Compose project with two services:

- A Python Flask backend that serves data from a text file.
- A Node.js Express frontend that fetches that backend data and renders it with EJS.

The project shows how containers communicate using Docker Compose networking.

## Tech Stack

- Python
- Flask
- Node.js
- Express
- EJS
- Docker
- Docker Compose

## Project Structure

```text
backend/      Flask API service
frontend/     Express and EJS web service
screenshoot/  Project screenshots
docker-compose.yaml
```

## How It Works

The backend exposes:

- `GET /` - basic backend health page
- `GET /api` - JSON list of names from `backend/names.txt`

The frontend exposes:

- `GET /` - renders the names received from the backend API

Docker Compose connects both services on the same network. The frontend reaches the backend through:

```text
http://backend-host:8000/api
```

## Run Locally With Docker

Start Docker Desktop, then run:

```bash
docker compose up --build
```

Open:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:8000
```

Backend API:

```text
http://localhost:8000/api
```

Stop the project:

```bash
docker compose down
```

## Full Documentation

See [DOCUMENTATION.md](DOCUMENTATION.md) for the full project explanation, architecture, commands, and complete screenshot gallery.
