const Router = require("express").Router;
const postController = require("../controllers/post-controller.js");
const UserController = require("../controllers/user-controller.js");
const AuthMiddleware = require("../middlewares/auth-middleware.js");

const router = new Router();

router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/refresh", UserController.refresh);
router.get("/users", AuthMiddleware, UserController.getUsers);
router.get("/posts", AuthMiddleware, postController.getAllPosts);
router.post("/post", AuthMiddleware, postController.createPost);
router.get("/posts/me", AuthMiddleware, postController.getPostsUser);

module.exports = router;
