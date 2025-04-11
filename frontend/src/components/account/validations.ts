import { z } from "zod"

export const createUserValidation = z.object({
  name: z.string().min(5).max(200),
  document: z.string().min(5).max(20),
  phone: z.string().nonempty(),
  birthdate: z.date(),
  email: z.string().email(),
  password: z.string().min(6).max(20),
  passwordConfirm: z.string().min(6).max(20)
})

export const updateUserValidation = z.object({
  name: z.string().min(5).max(200),
  document: z.string().min(5).max(20),
  phone: z.string().nonempty(),
  birthdate: z.date()
})
