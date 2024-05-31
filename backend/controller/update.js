const user = require("../model/user");
exports.update = async (req, res) => {
  try {
    let update = {};

    const { name, pic, email } = req.body;
    if (name) {
      update["name"] = name;
    }
    if (pic) {
      update["pic"] = pic;
    }
    await user.findOneAndUpdate({ email }, update).then((data) => {
      if (!data) {
        return res.status(500).json({ message: "Invalid cred" });
      }
      return res.status(200).json({ message: "Updated successfully" });
    });
  } catch (error) {
    console.log(error);
  }
};
