import React from 'react'
import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { loginRequest } from '../../redux/auth/authAction'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormState,
} from 'react-hook-form'
import styles from './style.module.scss'

import * as validation from './vaidation'

interface ISignInForm {
  email: string
  password: string
}

export const Login: React.FC = () => {
  const dispatch = useDispatch()

  const { handleSubmit, control } = useForm<ISignInForm>()
  const { errors } = useFormState({
    control,
  })

  const onSubmit: SubmitHandler<ISignInForm> = (data) =>
    dispatch(loginRequest(data))

  return (
    <div className={styles.authform}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        component="div"
        className={styles.authform__subtitle}
      >
        To get access
      </Typography>
      <form className={styles.authform__form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={validation.emailValidation}
          render={({ field }) => (
            <TextField
              label="Email"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              className={styles.authform__input}
              error={!!errors.email?.message}
              helperText={errors?.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={validation.passwordValidation}
          render={({ field }) => (
            <TextField
              label="Password"
              onChange={(e) => field.onChange(e)}
              value={field.value}
              fullWidth={true}
              size="small"
              margin="normal"
              type="password"
              className={styles.authform__input}
              error={!!errors?.password?.message}
              helperText={errors?.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          disableElevation={true}
          sx={{
            marginTop: 2,
          }}
        >
          Войти
        </Button>
      </form>

      <div className={styles.authform__footer}>
        <Typography variant="subtitle1" component="span">
          {"Don't have an account?"}
        </Typography>
        <Typography variant="subtitle1" component="span" sx={{ color: 'blue' }}>
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </div>
    </div>
  )
}
