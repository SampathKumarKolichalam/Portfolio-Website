const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ success: false, message: "Access Denied: No Token Provided" });
  }

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.admin = verified;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: "Invalid Token" });
  }
};

module.exports = verifyAdmin;
