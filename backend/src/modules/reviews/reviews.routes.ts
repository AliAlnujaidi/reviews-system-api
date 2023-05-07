import express from 'express';
import  review  from './functions';
import { requireLogin } from '../../helpers/access.control.middleware';
const router = express.Router();

router.get('/reviews', review.getReviews);
router.post('/addreview',requireLogin, review.addReview);

export default router