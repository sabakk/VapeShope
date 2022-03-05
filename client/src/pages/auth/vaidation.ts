interface ISignInForm {
  required: string
  validate: (value: string) => string | boolean
}

const emailValidation: ISignInForm = {
  required: 'Please provide a valid email address',
  validate: (value) => {
    if (value.match(/[а-яА-Я]/)) {
      return 'Логин не может содержать русские буквы'
    }

    return true
  },
}

const passwordValidation: ISignInForm = {
  required: 'Please provide a password',
  validate: (value) => {
    if (value.length < 6) {
      return 'password must be at least 6 characters'
    }

    return true
  },
}

export { emailValidation, passwordValidation }
