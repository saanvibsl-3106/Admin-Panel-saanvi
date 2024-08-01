const home = async (req, res) => {
    try {
      res.status(200).send("Hello");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const register = async (req, res) => {
    try {
      console.log(req.body);
      res.status(200).json({ message: 'Registration successful', data: req.body });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports = { home, register };
  