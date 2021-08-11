const { verify } = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload = verify(token, process.env.JWT_SECRET);
    req.auth = payload;
    next();
  } catch (error) {
    next({ msg: "Invalid token", status: 401 });
  }
};
