const jwt = require("jsonwebtoken");
const Admin = require("../models/adminModel.js");
const asyncHandler = require("express-async-handler");

const protectAdmin = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.admin = await Admin.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not Authorized, Token Failed !");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not Authorized, No Token !");
  }
});

module.exports = { protectAdmin };
