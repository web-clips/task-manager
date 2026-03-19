const jwt = require("jsonwebtoken");

const SECRET = "secretkey";

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("No token");
  }

  const decoded = jwt.verify(token, SECRET);

  req.user = decoded;

  next();
}

module.exports = auth;
