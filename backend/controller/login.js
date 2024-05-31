const user = require("../model/user");
const bcrypt = require("bcryptjs");
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email) {
      user.findOne({ email }).then(async (data) => {
        if (!data) {
          return res.status(500).json({ message: "Not login" });
        }

        const orignal = await bcrypt.compare(password, data.password);
        if (orignal) {
          return res.status(200).json({ message: "login successful" });
        } else {
          return res.status(500).json({ message: "Failed" });
        }
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Failed" });
  }
};
