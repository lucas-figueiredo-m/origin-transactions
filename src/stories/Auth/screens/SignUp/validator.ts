import { z } from 'zod';

export const SignUpDefaultValues = {
  email: '',
  password: '',
};

export const SignUpValidator = z
  .object({
    email: z.string().email({ message: 'signUp.validEmail' }),
    password: z.string().min(1, { message: 'signUp.validPassword' }),
    confirmPassword: z.string().min(1, { message: 'signUp.validPassword' }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        message: 'signUp.passwordsDontMatch',
        code: 'custom',
        path: ['confirmPassword'],
      });
    }
  });

export type SignUpValidatorType = z.infer<typeof SignUpValidator>;
