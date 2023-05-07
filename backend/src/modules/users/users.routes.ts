import express from 'express';
import  user  from './functions';
const router = express.Router();

router.post('/signup', user.signUp);
router.post('/login', user.loginUser);

export default router