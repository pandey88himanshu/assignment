const user = require("../model/user");
const bcrypt = require("bcryptjs");
exports.signup = async (req, res) => {
  try {
    const { name, email, password, pic } = req.body;
    if (email) {
      user.findOne({ email }).then((data) => {
        if (data) {
          res.status(500).json({ message: "User Found" });
        }
      });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const newUser = new user({
      name,
      email,
      password: hashpass,
      pic,
    });
    await newUser.save().then(() => {
      console.log("done");
      res.status(200).json({ message: "Success" });
    });
  } catch (error) {
    console.log(error);
  }
};
