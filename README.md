E-Commerce React App

A simple e-commerce application built with React to demonstrate core features like user authentication, product management, and a shopping cart, using React Context and local state.

Features

Authentication
User Registration: Sign up with name, email, and password.
User Login: Authenticate using email and password.
State managed via React Context.

Product Management
Displays a hardcoded list of products with name, price, description, and image.
Search: Quickly find products by name.
Filter by Price: Narrow down products within a specific price range.

Shopping Cart
Add items to the cart.
View cart details: quantity, price, and total cost.
Update item quantities or remove items.
Displays total cost dynamically.

Bonus Features
Client-side routing using React Router.
Persistent cart and authentication state using local storage.
Responsive design for desktop and mobile devices.

Installation and Setup

Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd <project-directory>

Install dependencies:
npm install

Start the development server:
npm start

Access the app at http://localhost:3000.

Project Structure
Components: Modular React components for scalability.
State Management: React Context for authentication and cart state.
Routing: React Router for navigating between pages.

Design Highlights
Clean and user-friendly UI.
Basic form validation for registration and login.
Responsive design suitable for all devices.


Build for Production

Run the following command to create a production-ready build:
npm run build
The build will be available in the build directory.