import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, test, unsubscribe, update } from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';
const router =express.Router()


router.get('/', (req, res) => {
    res.send('Hello World!');
/** prints it on the screen  "localhost8800/api/users/" */
});

router.get('/test',test);
/** basically we dont define all at one place
 * rather '/where to go' , where to go() function
 * which is in controllers
 */
//update user

router.put("/:id",verifyToken,update);


//delete user
router.delete('/:id',verifyToken,deleteUser);

// get a user
router.get("/find/:id",getUser);

//subscribe a user
router.put("/sub/:id",verifyToken,subscribe);

// unsubscribe a user
router.put("/unsub/:id",verifyToken,unsubscribe);

// like a video 
router.put("/like/:videoId",verifyToken,like);

// dislike a video 
router.put("/dislike/:videoId",verifyToken,dislike);










export default router;