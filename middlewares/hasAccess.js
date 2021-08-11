module.exports = (permissions) => {
  return (req, res, next) => {
    const access = req.auth.access;
    const type = typeof permissions;
    if (type == "number" && access == permissions) {
      next();
    } else if (
      type == "object" &&
      permissions.findIndex((perm) => perm == access) != -1
    ) {
      next();
    } else {
      next({ msg: "Access denied", status: 403 });
    }
  };
};
