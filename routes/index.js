var express = require('express');
var router = express.Router();

const authRouter = require('./AuthRouter');
const userRouter = require('./UsersRouter');

const AuthController = require('../controllers/').AuthController;
const AuthControllerObj = new AuthController();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use( '/auth', authRouter );

/**
 * auth middleware starts
 */
// router.use( AuthControllerObj.verifyToken );
/**
 * auth middleware ends
 */

router.use( '/users', userRouter );

module.exports = router;