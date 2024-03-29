import { z } from 'zod';

export const SignInDefaultValues = {
  email: '',
  password: '',
};

export const SignInValidator = z.object({
  email: z.string().email({ message: 'signIn.validEmail' }),
  password: z.string().min(1, { message: 'signIn.validPassword' }),
});

export type SignInValidatorType = z.infer<typeof SignInValidator>;
