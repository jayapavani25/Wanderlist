# 🌍 Wanderlist

Wanderlist is a full-stack Airbnb-style property listing web application where users can explore, create, and manage travel listings with image uploads and interactive maps.

---

## 🚀 Features (Implemented)

- 🏡 Create, edit, and delete property listings
- 🔐 User authentication & authorization (Passport.js)
- 📸 Image uploads using Cloudinary
- 🗺️ Interactive maps with Mapbox (location-based markers)
- 💬 Reviews system for listings
- 💾 Session storage using MongoDB
- 🛡️ Authorization checks (only owners can edit/delete listings)

---

## 🧪 Planned / In-Progress Features

- 🔍 Search listings by title or location
- 🏷️ Category-based filtering (Mountains, Rooms, Pools, etc.)
- ⭐ Ratings system
- ❤️ Wishlist / favorites
- 🌐 Deployment on Render

---

## 🛠️ Tech Stack

### Frontend
- HTML, CSS, Bootstrap
- EJS (Embedded JavaScript templates)
- Mapbox GL JS

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js (Authentication)
- Multer & Cloudinary (Image uploads)

---

## 📁 Project Structure

.
├── app.js
├── .env
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── middleware.js
├── cloudConfig.js
├── scripts/
├── utils/
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

```env
ATLASDB_URL=your_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAP_TOKEN=your_mapbox_token
SECRET=your_secret


## ▶️ Running the Project Locally

```bash
npm install
nodemon app.js


## 📌 Notes

- Older listings were backfilled with Mapbox geometry using a script.
- Search and category filtering will be added in upcoming iterations.

## 👩‍💻 Author

Jayapavani  
Full Stack Developer (Learning & Building 🚀)
