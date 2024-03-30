import { z } from 'zod';

export const SignUpDefaultValues = {
  email: '',
  name: '',
  password: '',
  confirmPassword: '',
};

export const SignUpValidator = z
  .object({
    email: z.string().email({ message: 'signUp.validEmail' }),
    name: z.string().min(1, { message: 'signUp.validName' }),
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
