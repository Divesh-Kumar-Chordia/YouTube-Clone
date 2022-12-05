import express from 'express';
import { test } from '../controllers/user.js';
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
export default router;