const sendToken = (user, res, status) => {
  const token = user.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COKKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res
    .status(status)
    .cookie("token", token, options)
    .json({ success: true, token, user });
};
module.exports = sendToken;
