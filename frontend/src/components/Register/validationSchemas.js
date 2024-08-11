import { z } from 'zod';

export const registerSchema = z.object({
  rollNo: z.string()
    .length(8, 'Roll number must be exactly 8 digits long')
    .regex(/^\d+$/, 'Roll number must be digits only'),
  email: z.string()
    .email('Invalid email address')
    .endsWith('@nitj.ac.in', 'Email must end with @nitj.ac.in'),
  name: z.string()
    .min(1, 'Name is required'),
  branch: z.string()
    .min(1, 'Branch is required')
    .transform(branch => branch.trim())
    .refine(branch => /^[A-Z][a-z]*$/.test(branch), 'Branch must be capitalized'),
  year: z.string()
    .length(1, 'Year must be a single digit')
    .refine(year => ['1', '2', '3', '4'].includes(year), 'Year must be between 1 and 4'),
  role: z.enum(['Mentor', 'Mentee']),
  password: z.string()
    .min(6, 'Password must be at least 6 characters long'),
  confirmPassword: z.string()
    .min(6, 'Confirm password must be at least 6 characters long')
})
.refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});
