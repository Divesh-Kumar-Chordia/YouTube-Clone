 export const test = (req,res) => {
    console.log('test');
    res.send("data received  from server");
    
};
/** req - from user 
 * res- what goes to user
 *     res.json("data received  from server"); - output on screen
 *     as "text"
 *     res.send("data received from server"); - output on screen 
 *     as  text
 */