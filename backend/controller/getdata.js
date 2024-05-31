const user = require("../model/user");
exports.getdata = async (req, res) => {
  try {
    const { email } = req.body;
    user.findOne({ email }).then((data) => {
      if (data) {
        res.send(data);
      }
    });
  } catch (error) {
    console.log(error);
  }
};
