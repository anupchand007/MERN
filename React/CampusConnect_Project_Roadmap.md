
# CampusConnect+ – MERN Stack Project Roadmap and Planning

**Project Goal:**  
Build a MERN-based platform that connects **Bachelor-level IT students across Nepal**, allowing them to share **notes, resources, discussions, and learning tools**.

**Current Scope:**  
Phase 1: Build for your **own college**, but design architecture to **scale for national use**.

---

## ✅ MERN Stack Overview

| Tech       | Use Case                                 |
|------------|-------------------------------------------|
| MongoDB    | Database for users, notes, forum posts    |
| Express.js | API and backend server                    |
| React.js   | Frontend interface                        |
| Node.js    | Server runtime environment                |

### Add-ons:
- **Mongoose** – Schema & validation for MongoDB
- **JWT** – Authentication
- **Multer / Cloudinary** – File uploads
- **Tailwind CSS / Bootstrap** – UI styling
- **Socket.IO** – (optional) Real-time features
- **Chart.js / Recharts** – Dashboard analytics

---

## 🔄 Expanded Project Vision

From **Campus-only** to **National-level IT Platform**:

| Feature                  | Campus Version             | National Version                         |
|--------------------------|----------------------------|-------------------------------------------|
| User Scope               | One College                | All Nepal Bachelor IT students           |
| Notes Access             | Local Notes Only           | Community-uploaded, searchable notes     |
| Q&A Forums               | Internal Forum             | Subject-based global forums              |
| Filtering                | N/A                        | Filter by program, semester, college     |
| Contributor Roles        | No                         | Contributors, Moderators, Admins         |

---

## 🗓️ 4-Week Roadmap – Phase 1 (College-Level)

### Week 1: Project Setup & Auth

- Setup MERN project (client/server)
- Connect MongoDB via Mongoose
- JWT login & registration
- Dashboard layout

### Week 2: Notes Module

- Upload notes (PDFs/docs)
- View/download notes
- Filter notes by subject/semester
- Use Multer or Cloudinary

### Week 3: Q&A Forum

- Post questions
- Comment on answers
- Subject-wise filtering

### Week 4: Profile & Admin Panel

- Profile page with uploads
- Admin access to moderate content
- Final testing & UI polish
- Report and presentation prep

---

## 🧱 Backend Schema Sample (for Scaling Later)

```js
user = {
  name: "Anil",
  email: "anil@email.com",
  college: "XYZ College",
  program: "BIT",
  semester: 6,
  role: "student"
}

note = {
  title: "OOP Concepts",
  subject: "Advanced Java",
  uploadedBy: ObjectId("user_id"),
  college: "XYZ College",
  program: "BIT",
  semester: 6,
  fileUrl: "...",
}
```

---

## 📌 Recommendation

- ✅ **Build for your college** for now
- ✅ **Design for national scope** from the start
- ✅ Add "Coming Soon" banners for public version
- ✅ Prepare roadmap, database, and scalable logic in backend

---

*Generated on 2025-04-12 by ChatGPT*
