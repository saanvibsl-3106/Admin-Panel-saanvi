const { z } = require('zod');

const registerSchema = z.object({
  rollNo: z.string()
    .min(1, 'Roll number is required')
    .max(30, 'Roll number must be less than 30 characters long'),
  email: z.string()
    .email('Invalid email address'),
  name: z.string()
    .min(1, 'Name is required'),
  branch: z.string()
    .min(1, 'Branch is required'),
  year: z.string()
    .min(1, 'Year is required'),
  role: z.enum(['Mentor', 'Mentee']),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string()
    .min(6, 'Confirm password must be at least 6 characters long')
})
.refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'], // Optional: Specifies which field the error relates to
});

const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address'),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
});

module.exports = { registerSchema, loginSchema };
