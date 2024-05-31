const router = require("express").Router();
const { signup } = require("../controller/signup");
const { login } = require("../controller/login");
const { getdata } = require("../controller/getdata");
const { update } = require("../controller/update");

router.put("/update", update);
router.post("/getdata", getdata);
router.post("/signup", signup);
router.post("/login", login);
module.exports = router;
