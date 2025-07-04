const router = require('express').Router();

// router.get('/', (req, res) => {
//     res.send('Welcome!');
// });
router.use('/users', require('./users'));

module.exports = router;