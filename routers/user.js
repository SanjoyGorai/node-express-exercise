import express from 'express';

const router = express.Router();
import userController from '../controllers/userControllers.js';

// router.get('/api',(req,res)=>{
//     res.json({
//         userName : "Sanjoy Gorai",
//         age : 23
//     })
// });
router.get('/api', userController)

export default router;

console.log()