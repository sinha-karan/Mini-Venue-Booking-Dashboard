Mini Venue Booking Dashboard

A simple full-stack web application to browse, book, and manage venues. Built with Node.js, Express, MongoDB, and a frontend in HTML/CSS/React.

---

Features

- Browse available venues
- Book a venue
- Venue owners can manage availability
- MongoDB used for real-time data persistence

---

 Tech Stack

- rontend: HTML, CSS, React
- Backend: Node.js + Express.js
- Database:MongoDB Atlas

---


cd server<img width="1439" height="899" alt="Screenshot 2025-07-17 225749" src="https://github.com/user-attachments/assets/a063684a-2a12-4255-917d-cfbf37fb2afe" />
<img width="1439" height="899" alt="Screenshot 2025-07-17 225740" src="https://github.com/user-attachments/assets/528e2d55-903e-443d-b867-7651ba53d566" />
<img width="1439" height="899" alt="Screenshot 2025-07-17 225725" src="https://github.com/user-attachments/assets/a8912f86-76f5-4e7e-bd00-84bfa0d88447" />
<img width="1439" height="899" alt="Screenshot 2025-07-17 225709" src="https://github.com/user-attachments/assets/eb5cf54f-0215-4edf-b9a2-28bad5aa63f0" />
<img width="1437" height="894" alt="Screenshot 2025-07-17 225653" src="https://github.com/user-attachments/assets/b65927e4-4f01-452e-bc1c-d1bc074ad3f5" />
<img width="1439" height="899" alt="Screenshot 2025-07-17 225619" src="https://github.com/user-attachments/assets/e263f22d-c190-484d-87c2-6f51f7db18b4" />
<img width="1422" height="899" alt="Screenshot 2025-07-17 225605" src="https://github.com/user-attachments/assets/9cde6bcd-4f40-4342-9ca5-5a6b424c160c" />


setup backend
npm install express mongoose cors dotenv

.env
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string

To Start Backend
node index.js

setup frontend
npm install
npm install react-router-dom axios

To start frontend
npm run dev

Deployment

Backend (Render)
Push your repo to GitHub
Go to https://render.com
Create a new web service
Set root to /server, and add:
Build Command: npm install
Start Command: node index.js
Environment Variable: MONGODB_URI=your-atlas-uri
Deploy
npm run dev
