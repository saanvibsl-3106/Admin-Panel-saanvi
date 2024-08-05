const { z } = require('zod');

// Validator for registration data
const registerSchema = z.object({
  username: z.string()
    .min(1, 'Username is required')
    .max(30, 'Username must be less than 30 characters long'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits long')
    .max(15, 'Phone number must be less than 15 digits long'),
  isAdmin: z.boolean().optional(), // Optional field
});

// Validator for login data
const loginSchema = z.object({
  username: z.string()
    .min(1, 'Username is required'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
});

module.exports = { registerSchema, loginSchema };
 