const Experience = require("../models/experince-model");

const Experiences = async (req, res) => {
  try {
    const response = await Experience.find();
    if(!response){
        return res.status(404).json({ message: "No experiences found" });
    }
    return res.status(200).json({ message: response });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "message not delivered" });
  }
};

module.exports = Experiences;