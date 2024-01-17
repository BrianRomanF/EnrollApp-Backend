// server.js
import express from 'express';
import session from 'express-session';
import passport from './config/passport.js';
import authRoutes from './routes/authRoutes.js';
import {connect} from './db.js';
import cors from "cors";

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
connect();

// Express middleware
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

// Start the server
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
