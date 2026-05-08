# MRI India Admin — Complete Setup Guide

## Project Structure

```
project/
├── websitee/          ← React Frontend (Vite + Tailwind)
└── backend/           ← Node.js + Express + MySQL API
```

---

## STEP 1 — Install MySQL

### Windows
1. Download MySQL Installer from https://dev.mysql.com/downloads/installer/
2. Run installer → choose "Developer Default"
3. Set root password (remember it!)
4. Start MySQL service (it starts automatically)

### macOS
```bash
brew install mysql
brew services start mysql
mysql_secure_installation   # set root password
```

### Linux (Ubuntu)
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo mysql_secure_installation
```

---

## STEP 2 — Create Database & Tables

1. Open MySQL terminal:
```bash
mysql -u root -p
# Enter your root password
```

2. Run the SQL file:
```sql
source /path/to/backend/database.sql;
```

OR copy-paste the entire contents of `backend/database.sql` into MySQL Workbench.

3. Verify:
```sql
USE journal_admin;
SHOW TABLES;
SELECT * FROM journals;
SELECT * FROM events;
```

---

## STEP 3 — Setup Backend

```bash
cd backend
npm install
```

### Configure .env
Edit `backend/.env` — update the DB password:
```env
PORT=5000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=YOUR_ACTUAL_MYSQL_PASSWORD   ← change this
DB_NAME=journal_admin
JWT_SECRET=mri_india_super_secret_jwt_key_2025
JWT_EXPIRES_IN=7d
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=123456
ADMIN_NAME=Admin
CLIENT_URL=http://localhost:5173
```

### Start Backend
```bash
npm run dev      # development (nodemon — auto-restart)
npm start        # production
```

Backend runs at: **http://localhost:5000**

---

## STEP 4 — Setup Frontend

```bash
cd websitee
npm install
npm run dev
```

Frontend runs at: **http://localhost:5173**

---

## STEP 5 — Login

Open http://localhost:5173/login

| Field | Value |
|-------|-------|
| Email | admin@gmail.com |
| Password | 123456 |

---

## API Endpoints

### Auth
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | /api/auth/login | No | Login |
| GET | /api/auth/me | Yes | Get admin info |

### Dashboard
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/dashboard | Yes | Stats + recent data |

### Journals
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/journals | No | Get all |
| GET | /api/journals/:id | No | Get one |
| POST | /api/journals | Yes | Create (multipart) |
| PUT | /api/journals/:id | Yes | Update (multipart) |
| DELETE | /api/journals/:id | Yes | Delete |

### Events
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | /api/events | No | Get all |
| GET | /api/events/:id | No | Get one |
| POST | /api/events | Yes | Create (multipart) |
| PUT | /api/events/:id | Yes | Update (multipart) |
| DELETE | /api/events/:id | Yes | Delete |

---

## File Uploads

- Images and PDFs are stored in `backend/uploads/`
- Accessible at: `http://localhost:5000/uploads/<filename>`
- Max image size: 5MB
- Max PDF size: 10MB
- Allowed types: JPG, PNG, WebP, PDF

---

## Common Issues

**"Database connection failed"**
→ Check DB_PASSWORD in .env matches your MySQL root password

**"Access denied for user root"**
→ Run: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password';`
→ Then: `FLUSH PRIVILEGES;`

**CORS error in browser**
→ Ensure CLIENT_URL in backend .env matches your frontend URL exactly

**Token expired**
→ Log out and log in again — token lasts 7 days

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite, Tailwind CSS, Axios |
| Backend | Node.js, Express.js |
| Database | MySQL 8+ |
| Auth | JWT (jsonwebtoken) |
| Uploads | Multer |
