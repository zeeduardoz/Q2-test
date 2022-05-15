import * as yup from 'yup'

export const SignInSchema = yup.object().shape({
  email: yup.string().email('e-mail invalido, verifique!').required('o e-mail é obrigatório.'),
  password: yup
    .string()
    .min(8, ({ min }) => `a senha deve ter no mínimo ${min} caracteres.`)
    .required('a senha é obrigatória.'),
})
