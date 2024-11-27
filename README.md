The *BookNest* is a user-friendly book store platform where users can browse, filter, and purchase books, while admins can manage the book inventory. 
This application is built using the **MERN Stack** (MongoDB, Express.js, React, Node.js).


### **Setup Instructions for the Book Store Web Application (MERN Stack)**

#### **Prerequisites**
1. **Install Node.js**: [Download and install](https://nodejs.org/).
2. **Install MongoDB**: Ensure MongoDB is installed and running locally, or have a connection string for a remote MongoDB database.
3. **Git**: [Download and install Git](https://git-scm.com/) for cloning the repository.

---

#### **Steps to Set Up the Project**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-repo/book-store-web-app.git
   ```
   Replace `https://github.com/your-repo/book-store-web-app.git` with the actual repository URL.

2. **Navigate to the Project Directory**:
   ```bash
   cd book-store-web-app
   ```

3. **Install Dependencies**:
   - For the **Frontend**:
     ```bash
     cd client
     npm install
     ```
   - For the **Backend**:
     ```bash
     cd ../server
     npm install
     ```

4. **Set Up Environment Variables**:
   Create a `.env` file in the **server** directory with the following details:
   ```plaintext
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=5000
   ```

5. **Start the Application**:
   - For Development:
     - Start the **Frontend**:
       ```bash
       cd client
       npm run dev
       ```
       This will run the frontend on **http://localhost:5173**.
     - Start the **Backend**:
       Open another terminal and navigate to the `server` directory:
       ```bash
       cd server
       npm run start:dev
       ```
       This will run the backend on **http://localhost:5000**.

   - For Production:
     - Build the frontend:
       ```bash
       cd client
       npm run build
       ```
       The frontend build files will be served by the backend.
     - Start the backend:
       ```bash
       cd ../server
       npm start
       ```

6. **Access the Application**:
   - Development:
     - **Frontend**: [http://localhost:5173](http://localhost:5173)
     - **Backend API**: [http://localhost:5000](http://localhost:5000)
   - Production:
     - Both frontend and backend will be served from [http://localhost:5000](http://localhost:5000).

_____________________________________________________________________________________________________________________________________________________________

#### **Testing the Application**
- Log in as a user to browse and purchase books.
- Log in as an admin to manage book inventory.

---

#### **Troubleshooting**
1. **Frontend not loading**: Ensure the frontend is running on `http://localhost:5173` and there are no errors in the terminal output.
2. **MongoDB connection error**: Verify MongoDB is running and the `MONGO_URI` in `.env` is correct.
3. **Port conflicts**: Check that ports `5173` and `5000` are not in use. Update the `.env` file or `vite.config.js` to use different ports if needed.

______________________________________________________________________________________________________________________________________________________________


## **Features**

### **User Features**
- **Browse Books**: View the latest book releases and sort books by genres like Fiction, Business, etc.
- **Book Details**: View detailed information about books, including images, names, and prices.
- **Add to Cart**: Add selected books to the shopping cart.
- **Checkout**: Complete purchases by providing address details during checkout.

### **Admin Features**
- **Login**: Admins can log in to access the inventory management system.
- **Manage Inventory**: Admins can add, update, or remove books from the store.

---

## **Roles**

1. **User**: Can browse, filter, add books to the cart, and complete purchases.
2. **Admin**: Manages the book inventory.

---

## **Technology Stack**

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
