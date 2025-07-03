# YouTube Clone

A full-stack YouTube clone application built with React, TypeScript, Node.js, and MongoDB. This project features a modern UI with video analytics, user interactions, and a responsive design.

## 🚀 Live Demo

- **Frontend**: [Deployed on Vercel](https://analyticview.vercel.app/)
- **Backend API**: [Deployed on Vercel](https://youtubeclone-5171.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Chart.js** - Data visualization
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Youtube-clone/
├── frontend/                 # React frontend application
│   ├── src/                 # Source code
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│   └── vite.config.ts       # Vite configuration
├── backend/                 # Node.js backend API
│   ├── models/              # MongoDB models
│   ├── routes/              # API routes
│   ├── server.js            # Express server
│   ├── package.json         # Backend dependencies
│   └── vercel.json          # Vercel deployment config
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Git](https://git-scm.com/)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Solomia717/Youtube-clone.git
   cd Youtube-clone
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install

   # Create .env file with your MongoDB connection
   cp .env.example .env
   # Edit .env with your MongoDB URI

   # Start backend server
   npm run dev
   ```

3. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install

   # Create .env file with API endpoint
   cp .env.example .env
   # Edit .env with your backend URL

   # Start frontend development server
   npm run dev
   ```

4. **Access the application**
   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://localhost:5000](http://localhost:5000)

## 🌐 Deployment

This project is configured for deployment on [Vercel](https://vercel.com/).

### Deploy to Vercel

1. **Fork this repository** to your GitHub account

2. **Deploy Frontend**
   - Connect your GitHub repository to Vercel
   - Set the root directory to `frontend`
   - Add environment variables in Vercel dashboard
   - Deploy

3. **Deploy Backend**
   - Create a new Vercel project for the backend
   - Set the root directory to `backend`
   - Add environment variables in Vercel dashboard
   - Deploy

### Environment Variables

#### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.vercel.app
VITE_APP_NAME=YouTube Clone
```

#### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/youtube-clone
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

## 📝 API Endpoints

### Analytics
- `GET /analyticvalue` - Get analytics data
- `POST /analyticvalue` - Create analytics entry
- `PUT /analyticvalue/:id` - Update analytics entry
- `DELETE /analyticvalue/:id` - Delete analytics entry

## 🎨 Features

- 📱 Responsive design for all devices
- 📊 Interactive analytics dashboard
- 🎥 Video player interface
- 👤 User avatar and profile components
- 📈 Chart visualizations
- 🔍 Search functionality
- 📅 Date picker components
- 🎯 Modern UI with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Solomia717**
- GitHub: [@Solomia717](https://github.com/Solomia717)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for hosting and deployment
- MongoDB for the database solution
- All contributors and supporters

---

⭐ Star this repository if you found it helpful!