**HostAPI \- Product Management API**

HostAPI is a Node.js and Express.js REST API designed for managing a collection of electronic products, including smartphones, laptops, tablets, and smartwatches. This API allows users to fetch product data with various filtering and sorting options. It is built using MongoDB Atlas as the database and Mongoose as the ORM.

🌐 Live API

The API is deployed and accessible at: [🔗](https://hostapi-uqkc.onrender.com/api/products) Live API

**🚀 Features**

* Fetch all products with optional filtering and sorting.  
    
* MongoDB integration using Mongoose.  
    
* Built-in error handling and data validation.  
    
* Supports case-insensitive search for product names.

📌 Setup & Installation

1️⃣ Clone the Repository

git clone https://github.com/VasudhaShivane/HostAPI.git  
cd HostAPI

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add your MongoDB Atlas connection string:

MONGODB\_URL=your\_mongodb\_connection\_string  
PORT=5000

4️⃣ Start the Server

npm start

The API should be running at http://localhost:5000

📡 API Endpoints

✅ Get All Products

GET /api/products

**Optional Query Parameters:**

| Parameter | Type | Description |
| ----- | ----- | ----- |
| `company` | String | Filter by company name (e.g., apple, samsung) |
| `name` | String | Search products by name (case-insensitive) |
| `sort` | String | Sort results by field (e.g., `price`, `rating`) |

Example Request:

GET /api/products?company=apple\&sort=price

