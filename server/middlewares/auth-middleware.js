const { registerSchema, loginSchema } = require('../validators/auth-validator');

const validateRegister = (req, res, next) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.errors.map(e => e.message).join(', ') });
  }
  next();
};

const validateLogin = (req, res, next) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ message: parsed.error.errors.map(e => e.message).join(', ') });
  }
  next();
};

module.exports = { validateRegister, validateLogin };
