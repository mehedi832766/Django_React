# 📝 Simple Notes

A full-stack note-taking web application with user authentication and note management features. Users can securely log in, create, search, and manage personal notes.

## ✨ Features

- User registration and login with **JWT-based authentication**
- Create, update, and delete personal notes
- Search notes by title
- Fully responsive UI using Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios  
- **Backend**: Django, Django REST Framework (DRF) with JWT Authentication  
- **Database**: PostgreSQL

## 🔐 Authentication

This app uses **JSON Web Tokens (JWT)** to handle secure user authentication. Access and refresh tokens are managed on the frontend via Axios interceptors.

## 📸 Screenshots

Here’s a quick look at the Simple Notes UI:

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/b5969024-b328-44e5-b5cb-d4eeec23d090" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/a80798d6-4be5-40b5-8ff3-dfb118307032" width="100%"></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/8b15af29-4db3-462d-8300-47ecfa3710e1" width="100%"></td>
    <td><img src="https://github.com/user-attachments/assets/acb703f0-41c6-4c11-9c85-ab80c26b2a35" width="100%"></td>
  </tr>
</table>

## 🚀 Getting Started

> Replace these with your actual setup commands if different.

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/simple-notes.git
```

### 2.  Backend Setup


```bash
#create a virtual env
python3 -m venv venv

# Activate the virtual environment
.\venv\Scripts\activate

# Navigate to the backend directory
cd backend

# Install backend dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate

# Start the Django development server
python manage.py runserver
```

### 3. Frontend Setup

Follow the instructions from the official Vite and Tailwind documentation:

- For **React with Vite**: [Vite React Guide](https://vite.dev/guide/)
- For **Tailwind CSS with Vite**: [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation/using-vite)

Once you’ve set up your frontend, run the development server with:

```bash
# Navigate to the frontend directory
cd frontend

# Start the Vite development server
npm run dev



