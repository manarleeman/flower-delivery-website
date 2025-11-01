
Flower Delivery Web App

A comprehensive full-stack flower ordering platform built with the MERN stack (MongoDB, Express, React, Node.js). The application features a smooth shopping experience for users, an intuitive admin dashboard, and secure payment integration through Paystack.

🌸 Overview

The Flower Delivery Web App provides an end-to-end solution for browsing, purchasing, and managing flower orders. It supports both customer-facing and admin-side functionalities, ensuring a seamless and secure experience from order placement to delivery management.

🛠️ Tech Stack

Frontend: React.js, Tailwind CSS, Axios, React Router
Backend: Node.js, Express.js, MongoDB, JWT, Multer, Paystack
Hosting: Vercel (Frontend & Admin), Render (Backend), MongoDB Atlas

✨ Features
🛍️ User Features

Browse and order flowers online

Secure sign-up and sign-in system (password ≥ 8 characters, unique email validation)

Access to cart and checkout restricted to authenticated users

Integrated Paystack payment system

Smart redirects after payment:

✅ Success → Redirect to Home (cart cleared)

❌ Failed → Redirect to Cart (items retained)

👩‍💼 Admin Features

Add, view, and delete flowers

Upload images using Multer

Confirmation popups for successful operations

🔒 Security

JWT Authentication for secure user sessions

Password and Email Validation to prevent weak credentials

Protected Routes for sensitive areas (Cart, Checkout, Admin)

🌼 Key Highlights

Fully responsive layout for mobile, tablet, and desktop

Organized MVC architecture

Deployed using Vercel (Frontend/Admin) and Render (Backend)

Integrated Paystack for real-time payment processing

🧩 Security Highlights

Passwords hashed with bcrypt + salt before storage

JWT tokens used for stateless authentication

Environment variables protect sensitive credentials

Validated and sanitized user inputs to mitigate vulnerabilities

📄 License

This project is open-source and distributed under the MIT License. You may freely use and adapt it for your own work.

🌐 Live Links
Component	Platform	URL
Frontend (User Website)	Vercel	
Admin Panel	Vercel	
Backend API	Render	

Server (Local): http://localhost:3000

Loom Video:
