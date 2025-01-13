const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json("All fields are required!");
  }

  try {
    let user = await User.findOne({ email }).select("-password");

    if (user) {
      return res.status(400).json("User already exist");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json("Server error");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json("Incorrect password");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    if (token) {
      res.status(200).json({
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          token: token,
        },
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  register,
  login,
};
