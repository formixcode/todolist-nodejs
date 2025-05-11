# Fullstack Todo List Application

A modern, fullstack todo list application built with React (TypeScript) and Node.js. This application allows users to create, read, update, and delete todo items with a clean and responsive user interface.

## Features

- Create new todo items
- View all todo items
- Mark todo items as completed/incomplete
- Delete todo items
- Responsive design with Tailwind CSS

## Tech Stack

### Frontend
- React 19.1.0
- TypeScript
- Vite
- Tailwind CSS
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests
- dotenv for environment variables

## Installation

### Prerequisites
- Node.js (v16 or higher recommended)
- MongoDB (local or Atlas)
- Bun (optional, for faster package installation)

### Setup

1. Clone the repository
   ```
   git clone <repository-url>
   cd todolist-nodejs
   ```

2. Install dependencies
   ```
   # Root dependencies
   npm install
   # or with Bun
   bun install

   # Client dependencies
   cd client
   npm install
   # or with Bun
   bun install

   # Server dependencies
   cd ../server
   npm install
   # or with Bun
   bun install
   ```

3. Environment setup
   - Create a `.env` file in the root directory based on `.env.example`
   - Add your MongoDB connection string:
     ```
     MONGO_URI="your_mongodb_connection_string"
     ```

## Usage

### Development

1. Start the backend server
   ```
   cd server
   node index.js
   ```

2. Start the frontend development server
   ```
   cd client
   npm run dev
   # or with Bun
   bun run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

### Production

1. Build the frontend
   ```
   cd client
   npm run build
   # or with Bun
   bun run build
   ```

2. Serve the built frontend with a static file server or configure your backend to serve the static files

## API Endpoints

The backend provides the following RESTful API endpoints:

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo by ID
- `DELETE /api/todos/:id` - Delete a todo by ID

## Project Structure

```
todolist-nodejs/
├── .env.example           # Example environment variables
├── package.json           # Root package.json with shared dependencies
├── client/                # Frontend React application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Entry point
│   │   └── ...            # Other components and files
│   ├── package.json       # Frontend dependencies
│   └── ...                # Configuration files
└── server/                # Backend Node.js application
    ├── index.js           # Server entry point
    ├── models/            # Database models
    │   └── Todo.js        # Todo model
    ├── routes/            # API routes
    │   └── todos.js       # Todo routes
    ├── package.json       # Backend dependencies
    └── ...                # Other server files
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)